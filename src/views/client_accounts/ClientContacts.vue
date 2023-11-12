<template>
    <AlertComponent ref="alert" />
    <div class="tab-pane fade" id="add-contacts" role="tabpanel" aria-labelledby="new-client-tab">
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
                                    <ul v-if="clientList.length && selectedClient == null"  class="w-75 rounded border px-4 py-2 mt-1 position-absolute bg-white" style="z-index: 99;">
                                            <li class="dropdown-item cursor-pointer pt-1 pb-1 ps-2 fw-bold border-bottom">
                                                Showing {{ clientList.length }} of {{searchClients.length}} results
                                            </li>
                                            <li @click="selectedClientName(client)" v-for="client in clientList" :key="client.id" class="dropdown-item cursor-pointer pt-1 pb-1 ps-2 list">
                                                {{ client.enName }}
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
                        <TableComponent :columns="contactHeader" :tableData="contactsTable" />
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-4 mb-5">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header text-center">
                        <span>{{ $t('update_client_contact') }}</span>
                    </div>
                    <div class="card-body">
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import TableComponent from '@/components/TableComponent.vue'
import AlertComponent from '@/components/AlertComponent.vue'
import { ref } from 'vue'

export default{
    components: {
    TableComponent,
    AlertComponent
    },
    data(){
        return{
            // conditions
            populated: false,

            // client search names
            searchTerm: '',
            searchClients: [],
            clientList: [],
            selectedClient: null,

            // client contacts table
            contactHeader: [
                "id","arabic_dr_name", 
            "english_dr_name",
            "email","dr_grade", "phone", "department"
            ],
            contactsTable: [],

            // client contact form
            drArabicName: '',
            drEnglishName: '',
            drEmail: '',
            grade: '',
            department: '',
            phone: '',
            
        }
    },
    watch: {
        searchTerm(newVale, oldValue){
            this.resetTab();
            var result = this.searchClients.filter(client => {
                return client.enName.toLowerCase().includes(newVale.toLowerCase())
            });
            if (result.length == 1 && newVale === result[0].enName){
                this.selectedClient = result;
            }
            else if (newVale == ''){
                this.clientList = [];
            }else{
                this.getNames(newVale);
                this.selectedClient = null;
            }
        }
    },
    methods:{
        // ############## client search names ##############
        async getNames(term){
            try {
                const url = this.host+'/api/client/searchNames/'+term;
                const res = await fetch(url)
                this.searchClients = (await res.json())
                this.clientList = this.searchClients.slice(0,10)
            } catch (error) {
                console.log(error);
            }
        },
        // check if the user selected a name from the list
        selectedClientName(client){
            this.searchTerm = client.enName;
            this.selectedClient = client;
        },
        // ############## search contacts for the selected client  ##############
        async search(){
            if(this.selectedClient == null){
                this.$refs.alert.showAlert('warning', "Please select a client name first");
                return;
            }
            else if(this.contactsTable.length > 0){
                return;
            }
            else{
                const clientId = this.selectedClient[0].id
                const url = this.host+'/api/client/'+clientId;
                const res = await fetch(url)
                var clientContacts = (await res.json())
                clientContacts.contacts.forEach(contact => {
                    this.contactsTable.push([contact.id, contact.enName, 
                    contact.arName, contact.email, 
                    contact.grade, contact.phone, contact.department
                    ]); 
                });
            }
        },
        // ############## populate the contact form if contact record was selected from the table ##############
        populateContact(record){
            this.populated = true;
            this.drArabicName = record.arabic_dr_name;
            this.drEnglishName = record.english_dr_name;
            this.drEmail = record.email;
            this.grade = record.dr_grade;
            this.phone = record.phone;
            this.department = record.department;
        },
        // ############## add a contact to client ##############
        async addContact(){
            if(this.selectedClient == null){
                this.$refs.alert.showAlert('warning', "Please select a client name first");
                return;
            }
            // create new contact
            else if(this.populated == false){
                const clientId = this.selectedClient[0].id
                const url = this.host+'/api/contact/';
                try {
                    const res = await fetch(url, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            clientId: clientId,
                            arName: this.drArabicName,
                            enName: this.drEnglishName,
                            email: this.drEmail,
                            grade: this.grade,
                            phone: this.phone,
                            department: this.department,
                        }),
                    })
                    var newContact = (await res.json())
                    console.log('new contact: ',newContact);
                    this.contactsTable.push([newContact.id, newContact.enName, 
                        newContact.arName, newContact.email, 
                        newContact.grade, newContact.phone, newContact.department
                    ]);
                }
                catch (error) {
                    console.log(error);
                }
            }
            // update contact
            else if(this.populated == true){
                return;
            }
        },
        // ############## delete a selected record from the table ##############
        deleteContact(){
            console.log('delete');
        },
        // reset the add/modify contact form
        clearContact(){
            this.populated = false;
            this.drArabicName = '';
            this.drEnglishName = '';
            this.drEmail = '';
            this.grade = '';
        },
        resetTab(){
            this.selectedClient = null;
            this.contactsTable = [];
            this.populated = false;
        },
        updateContact(){

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
