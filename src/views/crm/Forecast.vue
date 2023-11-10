<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" 
                        data-bs-toggle="tab" 
                        data-bs-target="#new-forecast" 
                        type="button" 
                        role="tab"
                         aria-controls="new forecast" 
                         aria-selected="true">{{ $t('new_forecast') }}</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" data-bs-toggle="tab" data-bs-target="#search-forecast" type="button" role="tab" aria-controls="search forecast" aria-selected="false">{{ $t('search_forecast') }}</button>
                    </li>
                </ul>
                <div class="tab-content">
                    <NewForecast/>
                    <TableComponent idTarget="search-forecast" :columns="columnNames" :tableData="tableData" />
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import NewForecast from '../forecast/NewForecast.vue'
import TableComponent from '@/components/TableComponent.vue';

export default{
    components: { NewForecast, TableComponent},
    data(){
        return {
            columnNames: ['date','dev_plan_action','dev_plan_status',
            'client','department','doctor_name','sales_man','notes'],
            tableData:[
                ["10/2022","الاسم بالعربي","Ted Alhayat",
                "www.ted.com","0555555555","google maps",
                "1515 takahssusi road, Ar Riyadh",
                "1515 takahssusi road, Ar Riyadh"],
                ["10/2022","الاسم بالعربي","Ted Alhayat",
                "www.ted.com","0555555555","google maps",
                "1515 takahssusi road, Ar Riyadh",
                "1515 takahssusi road, Ar Riyadh"],
                ["10/2022","الاسم بالعربي","Ted Alhayat",
                "www.ted.com","0555555555","google maps",
                "1515 takahssusi road, Ar Riyadh",
                "1515 takahssusi road, Ar Riyadh"],
            ]
        }
    }
}
</script>