<template>
    <div class="tab-pane fade" id="search-forecast" role="tabpanel" aria-labelledby="search-forecast-tab">
        <div class="row mt-4">
            <div class="card">
                <div class="card-body search-body">
                    <DataTable id="search-forecast" class="table table-hover client-search-width">
                        <thead class="table-success">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">{{ $t('date') }}</th>
                                <th scope="col">{{ $t('dev_plan_action') }}</th>
                                <th scope="col">{{ $t('dev_plan_status') }}</th>
                                <th scope="col">{{ $t('client') }}</th>
                                <th scope="col">{{ $t('department') }}</th>
                                <th scope="col">{{ $t('doctor_name') }}</th>
                                <th scope="col">{{$t('sales_man') }}</th>
                                <th scope="col">{{$t('notes') }}</th>
                            </tr>
                        </thead>
                        <tbody class="table-group-divider">
                            <tr>
                                <th scope="row">1</th>
                                <td>10/2022</td>
                                <td>..</td>
                                <td>Ted Alhayat</td>
                                <td>www.ted.com</td>
                                <td>0555555555</td>
                                <td>google maps</td>
                                <td>1515 takahssusi road, Ar Riyadh</td>
                                <td>1515 takahssusi road, Ar Riyadh</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>10/2022</td>
                                <td>..</td>
                                <td>Ted Specialist</td>
                                <td>www.ted.com</td>
                                <td>0555555555</td>
                                <td>google maps</td>
                                <td>1515 takahssusi road, Ar Riyadh</td>
                                <td>1515 takahssusi road, Ar Riyadh</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>10/2022</td>
                                <td>..</td>
                                <td>SMC2</td>
                                <td>www.ted.com</td>
                                <td>0555555555</td>
                                <td>google maps</td>
                                <td>1515 takahssusi road, Ar Riyadh</td>
                                <td>1515 takahssusi road, Ar Riyadh</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td>10/2022</td>
                                <td>..</td>
                                <td>SMC2</td>
                                <td>www.ted.com</td>
                                <td>0555555555</td>
                                <td>google maps</td>
                                <td>1515 takahssusi road, Ar Riyadh</td>
                                <td>1515 takahssusi road, Ar Riyadh</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td>10/2022</td>
                                <td>..</td>
                                <td>SMC2</td>
                                <td>www.ted.com</td>
                                <td>0555555555</td>
                                <td>google maps</td>
                                <td>1515 takahssusi road, Ar Riyadh</td>
                                <td>1515 takahssusi road, Ar Riyadh</td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td>10/2022</td>
                                <td>..</td>
                                <td>SMC2</td>
                                <td>www.ted.com</td>
                                <td>0555555555</td>
                                <td>google maps</td>
                                <td>1515 takahssusi road, Ar Riyadh</td>
                                <td>1515 takahssusi road, Ar Riyadh</td>
                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                <td>10/2022</td>
                                <td>..</td>
                                <td>SMC2</td>
                                <td>www.ted.com</td>
                                <td>0555555555</td>
                                <td>google maps</td>
                                <td>1515 takahssusi road, Ar Riyadh</td>
                                <td>1515 takahssusi road, Ar Riyadh</td>
                            </tr>
                            <tr>
                                <th scope="row">8</th>
                                <td>10/2022</td>
                                <td>..</td>
                                <td>SMC2</td>
                                <td>www.ted.com</td>
                                <td>0555555555</td>
                                <td>google maps</td>
                                <td>1515 takahssusi road, Ar Riyadh</td>
                                <td>1515 takahssusi road, Ar Riyadh</td>
                            </tr>
                            <tr>
                                <th scope="row">9</th>
                                <td>10/2022</td>
                                <td>..</td>
                                <td>SMC2</td>
                                <td>www.ted.com</td>
                                <td>0555555555</td>
                                <td>google maps</td>
                                <td>1515 takahssusi road, Ar Riyadh</td>
                                <td>1515 takahssusi road, Ar Riyadh</td>
                            </tr>
                            <tr>
                                <th scope="row">10</th>
                                <td>10/2022</td>
                                <td>..</td>
                                <td>SMC2</td>
                                <td>www.ted.com</td>
                                <td>0555555555</td>
                                <td>google maps</td>
                                <td>1515 takahssusi road, Ar Riyadh</td>
                                <td>1515 takahssusi road, Ar Riyadh</td>
                            </tr>
                            <tr>
                                <th scope="row">11</th>
                                <td>10/2022</td>
                                <td>..</td>
                                <td>SMC2</td>
                                <td>www.ted.com</td>
                                <td>0555555555</td>
                                <td>google maps</td>
                                <td>1515 takahssusi road, Ar Riyadh</td>
                                <td>1515 takahssusi road, Ar Riyadh</td>
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
    mounted(){
    }
}
</script>

<style>
@import 'datatables.net-dt';
</style>