<template>
    <div class="d-flex justify-content-start">
        <button ref="newBtn" class="btn btn-table text-black" data-bs-toggle="modal" :data-bs-target="createModal" :disabled="isNewDisabled">{{ $t("NEW") }}</button>
        <button @click="editRecord" ref="editBtn" class="btn btn-table text-black" data-bs-toggle="modal" :data-bs-target="editModal" disabled>{{ $t("EDIT") }}</button>
        <button @click="deleteRecord" ref="deleteBtn" class="btn btn-table text-black" disabled>{{ $t("DELETE") }}</button>
    </div>      
    <DataTable ref="table" :options='{ select: "single", dom:domOption}' :data="tableData" v-on:[`select`]="selectRow" v-on:[`deselect`]="deSelectRow" class="table table-hover display" width="100%">
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
import {isAr} from '../assets/js/rtl';

DataTable.use(DataTablesCore);
DataTable.use(Select);



export default{
    emits: ["onEdit", "onDelete"],
    expose: ["newBtn", "editBtn", "deleteBtn"],
    components:{
        DataTable
    },
    setup(){
        var record = {};
        let dt = null;
        const table = ref()
        const newBtn = ref()
        const editBtn = ref()
        const deleteBtn = ref()
        let domOption = "frtip";

        if (isAr()) {
            domOption = "<'pull-left'f>rtip";
        }
        return {
            table,
            dt,
            newBtn,
            editBtn,
            deleteBtn, 
            record,
            domOption
        }
    },
    props:{
        isNewDisabled:{
            type: Boolean,
            required: false,
            default: () => false
        },
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
            this.getSelectedRow()
            this.$emit('onEdit', this.record);
        },
        deleteRecord(){
            this.getSelectedRow()
            this.$emit('onDelete', this.record);
        },
        deSelectRow(){
            this.editBtn.disabled = true;
            this.deleteBtn.disabled = true;
        },
        selectRow(){    
            this.editBtn.disabled = false;
            this.deleteBtn.disabled = false;
        },
        getSelectedRow(){
            if(this.dt != null){
                const selectedRecord = this.dt.rows({selected: true}).data().toArray()[0];
                for (let i = 0; i < this.columns.length; i++) {
                    this.record[this.columns[i]] = selectedRecord[i];
                }
                this.record['rowIdx'] = this.dt.rows({selected: true})[0][0];
            }
        },
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