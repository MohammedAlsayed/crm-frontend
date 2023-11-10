<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" 
                        data-bs-toggle="tab" 
                        data-bs-target="#new-client-account" 
                        type="button" 
                        role="tab"
                         aria-controls="new client" 
                         aria-selected="true">{{ $t('new_client_account') }}</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" data-bs-toggle="tab" data-bs-target="#search-client" type="button" role="tab" aria-controls="search client" aria-selected="false">{{ $t('search_in_client_accounts') }}</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" data-bs-toggle="tab" data-bs-target="#add-contacts" type="button" role="tab" aria-controls="add contacts" aria-selected="false">{{ $t('add_contacts') }}</button>
                    </li>
                </ul>
                <div class="tab-content">
                    <NewClientAccount @onClientAdded="updateTable"/>
                    <div class="tab-pane fade" id="search-client" role="tabpanel" aria-labelledby="search-forecast-tab">
                        <div class="row mt-4 mb-5">
                            <div class="card">
                                <div class="card-body table-body">
                                    <TableComponent  :columns="clientHeader" :tableData="tableData" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <AddContacts/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import NewClientAccount from '../client_accounts/NewClientAccount.vue'
import AddContacts from '../client_accounts/AddContacts.vue'
import TableComponent from '@/components/TableComponent.vue'
import axios from 'axios';


export default{
    components:{
        NewClientAccount,  
        TableComponent,
        AddContacts,
    },
    data(){
        return {
            clientHeader: [
                'id','ar_client_name','en_client_name',
                'website','phone','city'],
            tableData: null,
        }
    },
    mounted(){
        this.getAllClientAccounts();
    },
    methods:{
        getAllClientAccounts(){
            console.log('get all client accounts');
            axios.get(this.host+'/api/client')
            .then(response => {
                if(response.status == 200){
                    this.tableData = response.data;
                var result = [];
                response.data.forEach((item: { id: number, arabicName: string, englishName: string, website: string, phone: string, city: string }) => {
                    result.push([item.id, item.arabicName, item.englishName, item.website, item.phone, item.city]);
                });
                this.tableData = result;
            }
            })
            .catch(error => {
                console.log(error);
            })
        },
        updateTable(client: any){
            this.tableData.push(client);
        }
    }
}
</script>
<style>

</style>
