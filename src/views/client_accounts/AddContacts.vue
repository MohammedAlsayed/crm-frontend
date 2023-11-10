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
                                    <ul v-if="nameList.length && displayList"  class="w-75 rounded border px-4 py-2 mt-1 position-absolute bg-white" style="z-index: 99;">
                                            <li class="dropdown-item cursor-pointer pt-1 pb-1 ps-2 fw-bold border-bottom">
                                                Showing {{ nameList.length }} of {{searchNames.length}} results
                                            </li>
                                            <li @click="selectedName(name)" v-for="name in nameList" class="dropdown-item cursor-pointer pt-1 pb-1 ps-2 list">
                                                {{ name }}
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
                        <TableComponent  @onRowSelected="populateContact" :columns="contactHeader" :tableData="contactsTable" />
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
                        <form @submit.prevent="addContact" class="ms-5">
                            <div class="form-group row mb-4">
                                <label class="col-form-label">{{ $t('arabic_dr_name') }}</label>
                                <div class="col-lg-4 me-5">
                                    <input v-model.trim="drArabicName" type="text" class="form-control">
                                </div>
                                <label class="col-form-label required" for="grade">{{ $t('english_dr_name') }}</label>
                                <div class="col-lg-4">
                                    <input v-model.trim="drEnglishName" type="text" class="form-control">
                                </div>
                            </div>
                            <div class="form-group row mb-4">
                                <label class="col-form-label">{{ $t('email') }}</label>
                                <div class="col-lg-4 me-5">
                                    <input  v-model.trim="drEmail" type="text" class="form-control">
                                </div>
    
                                <label class="col-form-label" for="grade">{{ $t('doctor_grade') }}</label>
                                <div class="col-lg-4">
                                    <div class="input-group">
                                        <select v-model="grade" class="form-select" id="grade">
                                            <option selected>Choose...</option>
                                            <option value="A+">A+</option>
                                            <option value="A">A</option>
                                            <option value="B+">B+</option>
                                            <option value="B">B</option>
                                            <option value="C+">C+</option>
                                            <option value="C">C</option>
                                            <option value="D+">D+</option>
                                            <option value="D">D</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="d-grid gap-2 d-flex justify-content-end">
                                <button type="reset" @click="resetContact" class="btn btn-primary me-md-2 float-left">Clear</button>
                                <button type="button" @click="deleteContact" class="btn btn-danger me-md-2 float-right">Delete</button>
                                <button type="submit" class="btn btn-success me-md-2 float-right">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import TableComponent from '@/components/TableComponent.vue'
import AlertComponent from '@/components/AlertComponent.vue'

export default{
    components: {
    TableComponent,
    AlertComponent
},
    data(){
        return{
            // client search names
            searchTerm: '',
            searchNames: [],
            nameList: [],
            displayList: false,
            selectedFlag: false,

            // client contacts table
            contactHeader: ["arabic_dr_name", 
            "english_dr_name",
            "dr_grade","email"
            ],
            contactsTable: [],

            // client contact form
            drArabicName: '',
            drEnglishName: '',
            drEmail: '',
            grade: '',
        }
    },
    watch: {
        searchTerm(newVale, oldValue){
            this.selectedFlag = false;
            if (this.nameList.includes(newVale)){
                this.displayList = false;
                this.selectedFlag = true;
            }
            else if (newVale == ''){
                this.nameList = [];
            }else{
                this.getNames(newVale);
                this.displayList = true;
            }
        }
    },
    methods:{
        // ############## client search names ##############
        async getNames(term){
            try {
                const url = this.host+'/api/client/searchIds/'+term;
                const res = await fetch(url)
                this.searchNames = (await res.json())
                this.nameList = this.searchNames.slice(0,10)
            } catch (error) {
                console.log(error);
            }
        },
        // check if the user selected a name from the list
        selectedName(name){
            this.searchTerm = name;
            this.displayList = false;
            this.selectedFlag = true;
        },
        // ############## search contacts for the selected client  ##############
        search(){
            if(this.selectedFlag == false){
                this.$refs.alert.showAlert('warning', "Please select a client name first");
                return;
            }
            console.log('search');
            this.contactsTable.push(['ara','ene','A+','ee']);
        },
        // ############## add a contact to client ##############
        addContact(){
            if(this.selectedFlag == false){
                this.$refs.alert.showAlert('warning', "Please select a client name first");
                return;
            }
            this.contactsTable.push([this.drArabicName, this.drEnglishName, this.grade, this.drEmail]);
            console.log('add contact');  
        },
        // ############## populate the contact form if contact record was selected from the table ##############
        populateContact(record){
            this.drArabicName = record.arabic_dr_name;
            this.drEnglishName = record.english_dr_name;
            this.drEmail = record.email;
            this.grade = record.dr_grade;
        },
        // ############## delete a selected record from the table ##############
        deleteContact(){
            console.log('delete');
        },
        // reset the add/modify contact form
        resetContact(){
            this.drArabicName = '';
            this.drEnglishName = '';
            this.drEmail = '';
            this.grade = '';
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
