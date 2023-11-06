<template>
    <div class="tab-pane fade" id="search-client" role="tabpanel" aria-labelledby="search-client-tab">
        <div class="row mt-4">
            <DataTable id="search-client" class="table table-hover">
                <thead class="table-success">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">{{ $t('client_accounts.client_code') }}</th>
                        <th scope="col">{{ $t('client_accounts.ar_client_name') }}</th>
                        <th scope="col">{{ $t('client_accounts.en_client_name') }}</th>
                        <th scope="col">{{ $t('client_accounts.website') }}</th>
                        <th scope="col">{{ $t('client_accounts.phone') }}</th>
                        <th scope="col">{{ $t('client_accounts.location') }}</th>
                        <th scope="col">{{ $t('client_accounts.national_address') }}</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    <tr>
                        <th scope="row">1</th>
                        <td>C-000820</td>
                        <td>..</td>
                        <td>Ted Alhayat</td>
                        <td>www.ted.com</td>
                        <td>0555555555</td>
                        <td>google maps</td>
                        <td>1515 takahssusi road, Ar Riyadh</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>C-000821</td>
                        <td>..</td>
                        <td>Ted Specialist</td>
                        <td>www.ted.com</td>
                        <td>0555555555</td>
                        <td>google maps</td>
                        <td>1515 takahssusi road, Ar Riyadh</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>C-000822</td>
                        <td>..</td>
                        <td>SMC2</td>
                        <td>www.ted.com</td>
                        <td>0555555555</td>
                        <td>google maps</td>
                        <td>1515 takahssusi road, Ar Riyadh</td>
                    </tr>
                </tbody>
            </DataTable>
        </div>
    </div>
    </template>
<script lang="ts">
import DataTable from 'datatables.net-vue3';
import DataTablesCore from 'datatables.net';
DataTable.use(DataTablesCore);

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