<template>
    <DataTable id="#dataTable" :options="{ select: true }" :data="tableData" v-on:[`select`]="selectRow" class="table table-hover display" width="100%">
            <thead class="table-success">
                <tr>
                    <!-- <th scope="col">#</th> -->
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


DataTable.use(DataTablesCore);
DataTable.use(Select);


export default{
    emits: ["onRowSelected"],
    components:{
        DataTable
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
    },
    methods:{
        // emits an event orRowSelected with the selected row data
        selectRow(e){     
            var record = {}
            for (var i = 0; i < this.columns.length; i++) {
                record[this.columns[i]] = e.dt.value.rows({selected: true}).data().toArray()[0][i];
            }
            this.$emit('onRowSelected', record);
            // console.log(e.dt.value.rows({selected: true}).data().toArray()[0]);
        }
    },
}
</script>

<style>
@import 'datatables.net-dt';
</style>