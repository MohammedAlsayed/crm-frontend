<template>
    <div class="tab-pane fade" :id=idTarget role="tabpanel" aria-labelledby="search-forecast-tab">
        <div class="row mt-4">
            <div class="card">
                <div class="card-body search-body">
                    <DataTable :data="tableData" class="table table-hover client-search-width display" width="100%">
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
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';
import Select from 'datatables.net-select';
import 'datatables.net-responsive';


DataTable.use(DataTablesCore);
DataTable.use(Select);

export default{
    components:{
        DataTable
    },
    props:{
        idTarget: String,
        columns: {
            type: Array,
            required: true,
            default: () => []
        },
        tableData: {
            type: Array,
            required: true,
            default: () => []
        },
    },
}
</script>

<style>
@import 'datatables.net-dt';
</style>