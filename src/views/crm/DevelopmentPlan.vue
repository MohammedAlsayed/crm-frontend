<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" 
                        data-bs-toggle="tab" 
                        data-bs-target="#new-dev-plan" 
                        type="button" 
                        role="tab"
                         aria-controls="new plan" 
                         aria-selected="true">{{ $t('new_dev_plan') }}</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" data-bs-toggle="tab" data-bs-target="#search-dev-plan" type="button" role="tab" aria-controls="search plan" aria-selected="false">{{ $t('search_dev_plan') }}</button>
                    </li>
                </ul>
                <div class="tab-content">
                    <NewDevPlan/>
                    <SearchComponent idTarget="search-dev-plan" :columns="columnNames" :tableData="tableData" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import NewDevPlan from '../development_plan/NewDevPlan.vue';
import SearchComponent from '@/components/SearchComponent.vue';

export default{
    components: { 
        NewDevPlan, SearchComponent 
    },
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
