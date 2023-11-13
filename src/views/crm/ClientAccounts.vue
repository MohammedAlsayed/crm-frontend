<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#search-client" type="button" role="tab" aria-controls="search client" aria-selected="true">{{ $t('client_accounts') }}</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" data-bs-toggle="tab" data-bs-target="#add-contacts" type="button" role="tab" aria-controls="add contacts" aria-selected="false">{{ $t('client_contacts') }}</button>
                    </li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane fade show active" id="search-client" role="tabpanel" aria-labelledby="search-forecast-tab">
                        <div class="row mt-4 mb-5">
                            <div class="card">
                                <div class="card-body table-body">
                                    <TableComponent :columns="clientHeader" :tableData="tableData" :createModal="createView" :editModal="editView" @onEdit="getRecord"/>
                                    <NewClient @onClientAdded="addToTable"/>
                                    <EditClient :clientObj="toEditRecord" @onClientEdited="updateTable"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ClientContacts/>
                </div>
            </div>
        </div>
    </div>
<!-- Modal -->

</template>

<script lang="ts">
import NewClient from '../client_accounts/NewClient.vue'
import EditClient from '../client_accounts/EditClient.vue'
import ClientContacts from '../client_accounts/ClientContacts.vue'
import TableComponent from '@/components/TableComponent.vue'
import axios from 'axios';



export default{
    components:{
        NewClient,  
        EditClient,
        TableComponent,
        ClientContacts,
    },
    data(){
        return {
            clientHeader: [
                'id','ar_client_name','en_client_name',
                'website','phone','city'],
            tableData: null,
            createView: '#createClientModal',
            editView: '#editClientModal',
            toEditRecord: {},
        }
    },
    mounted(){
        this.getAllClients();
    },
    methods:{
        getAllClients(){
            axios.get(this.host+'/api/client')
            .then(response => {
                if(response.status == 200){
                    this.tableData = response.data;
                    var result = [];
                    response.data.forEach((item: { id: number, arName: string, enName: string, website: string, phone: string, city: string }) => {
                        result.push([item.id, item.arName, item.enName, item.website, item.phone, item.city]);
                    });
                    this.tableData = result;
                }else{
                    console.log(response);
                }
            })
            .catch(error => {
                console.log(error);
            })
        },
        addToTable(client: any){
            this.tableData.push([client.id, client.arName, client.enName, client.website, client.phone, client.city]);
        },
        getRecord(client: any){
            this.toEditRecord.id = client.id;
            this.toEditRecord.arName = client.ar_client_name;
            this.toEditRecord.enName = client.en_client_name;
            this.toEditRecord.website = client.website;
            this.toEditRecord.phone = client.phone;
            this.toEditRecord.city = client.city;
        },
        updateTable(client: any){
            var toUpdateRecord = this.tableData[client.id-1]
            toUpdateRecord[1] = client.arName ? client.arName : toUpdateRecord[1];
            toUpdateRecord[2] = client.enName ? client.enName : toUpdateRecord[2];
            toUpdateRecord[3] = client.website ? client.website : toUpdateRecord[3];
            toUpdateRecord[4] = client.phone ? client.phone : toUpdateRecord[4];
            toUpdateRecord[5] = client.city ? client.city : toUpdateRecord[5];    
        }
    }
}
</script>
<style>

</style>
