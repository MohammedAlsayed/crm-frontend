<template>
    <div class="d-flex justify-content-start">
        <button class="btn btn-table text-black" data-bs-toggle="modal" :data-bs-target="createModal" >NEW</button>
        <button ref="editBtn" class="btn btn-table text-black" disabled data-bs-toggle="modal" :data-bs-target="editModal" >EDIT</button>
        <button ref="deleteBtn" class="btn btn-table text-black" disabled>DELETE</button>
    </div>
    <DataTable ref="table" :options="{ select: 'single', dom: 'frtip'}" :data="tableData" v-on:[`select`]="selectRow" v-on:[`deselect`]="deselectRow" class="table table-hover display" width="100%">
            <thead class="table-success">
                <tr>
                    <th v-for="col in columns" scope="col" :key="col">
                        {{ $t(col) }}
                    </th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                
            </tbody>
    </DataTable>
</template>
<script lang="ts">
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';
import Select from 'datatables.net-select';

import 'datatables.net-responsive';
import {ref} from 'vue';

DataTable.use(DataTablesCore);
DataTable.use(Select);


export default{
    emits: ["create", "edit", "delete"],
    components:{
        DataTable
    },
    setup(){
        const table = ref()
        const editBtn = ref()
        const deleteBtn = ref()
        var record = null;
        let dt = null;
        return {
            table,
            dt,
            editBtn,
            deleteBtn, 
            record
        }
    },
    props:{
        columns: {
            type: Array,
            required: true,
            default: () => []
        },
        tableData: {
            type: Array,
            required: false,
            default: () => []
        },
        createModal:{
            type: String,
            required: false,
            default: () => null
        },
        editModal:{
            type: String,
            required: false,
            default: () => null
        },
        deleteModal:{
            type: String,
            required: false,
            default: () => null
        }
    },
    mounted(){
        this.dt = this.table.dt;
    },
    methods:{
        editRecord(){
            console.log('update record');
            this.$emit('edit', this.record);
        },
        deleteRecord(){
            console.log('delete record');
            this.$emit('delete', this.record);
        },
        deselectRow(e){
            console.log('deselect row');
            this.editBtn.disabled = true;
            this.deleteBtn.disabled = true;
        },
        // emits an event with the selected row data
        selectRow(e){    
            console.log('select row');
            console.log();
            this.editBtn.disabled = false;
            this.deleteBtn.disabled = false;
            this.record = e.dt.value.rows({selected: true}).data().toArray()[0];
            // var record = {}
            // for (var i = 0; i < this.columns.length; i++) {
            //     record[this.columns[i]] = e.dt.value.rows({selected: true}).data().toArray()[0][i];
            // }
            // 
            // console.log(e.dt.value.rows({selected: true}).data().toArray()[0]);
        }
    },
}
</script>

<style>
@import 'datatables.net-dt';
.btn-table{
    background: linear-gradient(to bottom, rgba(230, 230, 230, 0.1) 0%, rgba(0, 0, 0, 0.1) 100%) !important;
    padding: 0.5em 1em !important;
    border-color: rgba(0, 0, 0, 0.437)  !important;
    margin: 0px 5px;
}
.btn-table:active{
  background-color: rgb(255, 237, 214) !important;
  background-size: 100% !important;
  transition: background 0s !important;
}
</style>