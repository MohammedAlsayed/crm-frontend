<template>
    <div class="tab-pane fade" :id=idTarget role="tabpanel" aria-labelledby="search-forecast-tab">
        <div class="row mt-4">
            <div class="card">
                <div class="card-body search-body">
                    <DataTable class="table table-hover client-search-width">
                        <thead class="table-success">
                            <tr>
                                <th scope="col">#</th>
                                <th v-for="col in columns" scope="col" :key="col">
                                    {{ $t(col) }}
                                </th>
                            </tr>
                        </thead>
                        <tbody class="table-group-divider">
                            <tr v-for="(row, index) in tableData" scope="col" :key="index">
                                    <th scope="row">{{ index }}</th>
                                    <td>{{ row.date }}</td>
                                    <td>{{ row.close_date }}</td>
                                    <td>{{ row.price }}</td>
                                    <td>{{ row.quantity }}</td>
                                    <td>{{ row.product }}</td>
                                    <td>{{ row.amount }}</td>
                                    <td>{{ row.client }}</td>
                                    <td>{{ row.department }}</td>
                                    <td>{{ row.doctor_name }}</td>
                                    <td>{{ row.close_percent }}</td>
                                    <td>{{ row.notes }}</td>
                            </tr>
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