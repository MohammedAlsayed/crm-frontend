<template>
    <div class="container">
        <AlertComponent ref="alert"/>
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
                                    <TableComponent ref="table" :columns="clientHeader" :tableData="tableData" :createModal="createView" :editModal="editView" @onEdit="getRecord" @onDelete="deleteRecord"/>
                                    <NewClient @onClientAdded="addToTable"/>
                                    <EditClient :clientObj="toEditClient" @onClientEdited="updateTable"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ClientContacts/>
                </div>
            </div>
        </div>
    </div>

</template>

<script lang="ts">
import NewClient from '../client_accounts/NewClient.vue'
import EditClient from '../client_accounts/EditClient.vue'
import ClientContacts from '../client_accounts/ClientContacts.vue'
import TableComponent from '@/components/TableComponent.vue'
import AlertComponent from '@/components/AlertComponent.vue'
import axios from 'axios';


export default{
    components:{
        NewClient,  
        EditClient,
        TableComponent,
        ClientContacts,
        AlertComponent
    },
    data(){
        return {
            clientHeader: [
                'id','ar_client_name','en_client_name',
                'website','phone','city'],
            tableData: null,
            createView: '#createClientModal',
            editView: '#editClientModal',
            toEditClient: {},
        }
    },
    mounted(){
        this.getAllClients();
    },
    methods:{
        async getAllClients(){
            try{
                const response = await axios.get('client')
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
            }
            catch(error) {
                console.log(error);
            }
        },
        addToTable(client: any){
            this.tableData.push([client.id, client.arName, client.enName, client.website, client.phone, client.city]);
        },
        getRecord(client: any){
            this.toEditClient.rowIdx = client.rowIdx;
            this.toEditClient.id = client.id;
            this.toEditClient.arName = client.ar_client_name;
            this.toEditClient.enName = client.en_client_name;
            this.toEditClient.website = client.website;
            this.toEditClient.phone = client.phone;
            this.toEditClient.city = client.city;
        },
        async deleteRecord(client: any){
            try{
                const result = await axios.delete('client/'+client.id)
                if (result.status == 204){
                    this.tableData.splice(client.rowIdx, 1);
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
        },
        updateTable(client: any){
            var toUpdateRecord = this.tableData[client.rowIdx]
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
