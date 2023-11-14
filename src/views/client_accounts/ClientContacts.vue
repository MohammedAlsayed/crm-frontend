<template>
    <div class="tab-pane fade" id="add-contacts" role="tabpanel" aria-labelledby="new-client-tab">
        <AlertComponent ref="alert" />
        <div class="row mt-4">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header text-center">
                        <span>{{ $t('search_client') }}</span>
                    </div>
                    <div class="card-body ms-4">
                        <form @submit.prevent="search">
                            <div class="form-group row mb-4">
                                <label class="col-form-label" for="client-name">{{ $t('en_client_name') }}</label>
                                <div class="col-lg-4 me-5 dropdown">
                                    <div class="input-group">
                                        <input type="text" class="form-control" v-model="searchTerm" placeholder="Search in names...">
                                    </div>
                                    <ul v-if="shortResult.length > 0 && selectedClient === null"  class="w-75 rounded border px-4 py-2 mt-1 position-absolute bg-white" style="z-index: 99;">
                                            <li class="dropdown-item cursor-pointer pt-1 pb-1 ps-2 fw-bold border-bottom">
                                                Showing {{ shortResult.length }} of {{allSearchResult.length}} results
                                            </li>
                                            <li @click="listSelect(client)" v-for="client in shortResult" :key="client.id" class="dropdown-item cursor-pointer pt-1 pb-1 ps-2 list">
                                                {{client.id}}: {{ client.enName }}
                                            </li>
                                    </ul>
                                </div>   
                                <div class="col-lg-4">
                                    <div class="d-grid gap-2 d-flex justify-content-end">
                                        <button type="submit" class="btn btn-success me-md-2 float-right">Search</button>                        
                                    </div>
                                </div>                             
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header text-center">
                        <span>{{ $t('client_contacts') }}</span>
                    </div>
                    <div class="card-body">
                        <TableComponent ref="table" :columns="contactHeader" :isNewDisabled=true :tableData="contactsTable" :createModal="createView" :editModal="editView" @onEdit="getRecord" @onDelete="deleteRecord"/>
                        <NewContact :client="clientObj" @onContactAdded="addToTable"/>
                        <EditContact :contactInfo="toEditContact" @onContactEdited="updateTable"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import TableComponent from '@/components/TableComponent.vue'
import AlertComponent from '@/components/AlertComponent.vue'
import NewContact from './NewContact.vue'
import EditContact from './EditContact.vue'
import axios from 'axios';

export default{
    components: {
    TableComponent,
    AlertComponent,
    NewContact,
    EditContact
    },
    data(){
        return{
            // client search names
            searchTerm: '',
            allSearchResult: [],
            shortResult: [],

            selectedClient: null,

            clientObj: {},
            toEditContact: {},
                
            // client contacts table
            contactHeader: [
                "id","arabic_name", 
                "english_name","grade","phone","email", "department"
            ],
            contactsTable: [],   
            
            createView: '#createContactModal',
            editView: '#editContactModal',
        }
    },
    watch: {
        searchTerm(newVal, oldVal){
            const result = this.allSearchResult.filter(client => client.enName === newVal);
            if(result.length == 1){
                this.listSelect[result[0]]
                return;
            }

            // // if he didn't select from the list reset all values
            // // if he selected from the list the difference between old and new val length will be greater than 1
            if(newVal.length == oldVal.length+1 || newVal.length == oldVal.length-1){
                this.reset();
            }
        
            if(newVal == ''){
                this.reset();
                this.shortResult = [];
                return;
            }
            if(this.selectedClient === null){
                this.getNames(newVal);
            }
        }
    },
    methods:{
        // ############## client search names ##############
        async getNames(term){
            try {
                const parsedTerm = encodeURIComponent(term)
                const url = new URL(this.host+'/api/client/searchNames/'+parsedTerm);
                const res = await fetch(url.href)
                this.allSearchResult = (await res.json())
                this.shortResult = this.allSearchResult.slice(0,10)
            } catch (error) {
                console.log(error);
            }
        },
        // check if the user selected a name from the list
        listSelect(client){
            this.searchTerm = client.enName;
            this.selectedClient = client;
            this.clientObj = this.selectedClient;
            this.shortResult = [];
        },
        // ############## search contacts for the selected client  ##############
        async search(){
            if(this.selectedClient === null){
                this.$refs.alert.showAlert('warning', "Please select a client from the list first");
                return;
            }
            if(this.contactsTable.length > 0){
                return;
            }

            const url = this.host+'/api/client/'+this.selectedClient.id;
            try{
                const res = await fetch(url)
                if (res.status == 200){
                    var clientContacts = (await res.json())
                    clientContacts.contacts.forEach(contact => {
                        this.contactsTable.push([contact.id, contact.arName, contact.enName, 
                        contact.grade, contact.phone, contact.email, contact.department
                        ]); 
                    });
                    this.$refs.table.newBtn.disabled = false; // enable new contact button
                }
                else{
                    console.log(res);
                    this.$refs.alert.showAlert('danger', "Error while trying to get client contacts");
                }
            }
            catch(error){
                console.log(error);
                this.$refs.alert.showAlert('danger', "Error while trying to get client contacts");
            }
        },
        reset(){
            this.selectedClient = null;
            this.contactsTable = [];
            this.$refs.table.newBtn.disabled = true; // disable new contact button if no client was selected
            this.$refs.table.editBtn.disabled = true; // disable edit contact button if no client was selected
            this.$refs.table.deleteBtn.disabled = true; // disable delete contact button if no client was selected
        },

        // ############## client contacts table ##############
        addToTable(contact){
            this.contactsTable.push([contact.id, contact.arName, contact.enName, 
                contact.grade, contact.phone, contact.email, contact.department
                ]); 
        },

        // ############# Edit Contact ################
        getRecord(contact){
            this.toEditContact = {}
            this.toEditContact.clientId = this.selectedClient.id;
            this.toEditContact.rowIdx = contact.rowIdx;
            this.toEditContact.id = contact.id;
            this.toEditContact.arName = contact.arabic_name;
            this.toEditContact.enName = contact.english_name;
            this.toEditContact.grade = contact.grade;
            this.toEditContact.phone = contact.phone;
            this.toEditContact.email = contact.email;
            this.toEditContact.department = contact.department;
        },
        updateTable(updatedContact){
            var toUpdateRecord = this.contactsTable[this.toEditContact.rowIdx]
            toUpdateRecord[1] = updatedContact.arName ? updatedContact.arName : toUpdateRecord[1];
            toUpdateRecord[2] = updatedContact.enName ? updatedContact.enName : toUpdateRecord[2];
            toUpdateRecord[3] = updatedContact.grade ? updatedContact.grade : toUpdateRecord[3];
            toUpdateRecord[4] = updatedContact.phone ? updatedContact.phone : toUpdateRecord[4];
            toUpdateRecord[5] = updatedContact.email ? updatedContact.email : toUpdateRecord[5];
            toUpdateRecord[6] = updatedContact.department ? updatedContact.department : toUpdateRecord[6];   
            this.toEditContact = {};
        },
        // ############# Delete Contact ################
        async deleteRecord(contact){
            try{
                const result = await axios.delete(this.host+'/api/contact/'+contact.id)
                if (result.status == 204){
                    this.contactsTable.splice(contact.rowIdx, 1);
                    this.$refs.alert.showAlert("success", "Deleted successfully");
                    this.$refs.table.editBtn.disabled = true;
                    this.$refs.table.deleteBtn.disabled = true;
                }
                else{
                    console.log(result);
                    this.$ref.alert.showAlert("danger", "Error couldn't delete the record");
                }
            }catch(error){
                console.log(error);
                this.$ref.alert.showAlert("danger", "Error couldn't delete the record");
            }
        }
    }
}
</script>
<style>
.list:hover{
    background-color: #e2e2e2 !important;
    cursor: pointer;
}
.dropdown-item{
    overflow-y: hidden
}
</style>
