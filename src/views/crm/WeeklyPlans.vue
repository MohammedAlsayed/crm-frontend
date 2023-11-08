<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" 
                        data-bs-toggle="tab" 
                        data-bs-target="#new-weekly-plan" 
                        type="button" 
                        role="tab"
                         aria-controls="new weekly plan" 
                         aria-selected="true">{{ $t('new_weekly_plan') }}</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" 
                        data-bs-toggle="tab" 
                        data-bs-target="#search-weekly-plan" 
                        type="button" role="tab" 
                        aria-controls="search weekly plan" 
                        aria-selected="false">{{ $t('search_weekly_plan') }}</button>
                    </li>
                </ul>
                <div class="tab-content">
                    <NewWeeklyPlan/>
                    <SearchComponent idTarget="search-weekly-plan"  :columns="columnNames" :tableData="tableData" />
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import NewWeeklyPlan from '../weekly_plans/NewWeeklyPlan.vue'
import SearchComponent from '@/components/SearchComponent.vue'

export default{
    components: { NewWeeklyPlan, SearchComponent },
    data (){
        return {
            columnNames: [
                'date','close_date', 'price', 
                'quantity','product', 'amount', 
                'client','department','doctor_name',
                'close_percent', 'notes'],

            tableData:[
                {'date':'11/2022', 'close_date':'30/11/2022', 'price':'30', 
                'quantity':'10',  'product':'glass', 'amount':'10', 
                'client':'KFSHRC','department':'Family','doctor_name':'Mosa',
                'close_percent':'100%', 'notes':'They need more next month'},
                {'date':'11/2022', 'close_date':'30/11/2022', 'price':'30',
                'quantity':'10',  'product':'glass', 'amount':'10',
                'client':'KFSHRC','department':'Family','doctor_name':'Mosa',
                'close_percent':'100%', 'notes':'They need more next month'}
            ]
        }
    }
}
</script>