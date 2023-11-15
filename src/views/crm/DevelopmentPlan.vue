<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" 
                        data-bs-toggle="tab" 
                        data-bs-target="#dev-plans" 
                        type="button" 
                        role="tab"
                         aria-controls="new plan" 
                         aria-selected="true">{{ $t('development_plans') }}</button>
                    </li>
                </ul>
                <div class="tab-content">
                    <div class="tab-pane fade show active" id="dev-plans" role="tabpanel">
                        <div class="row mt-4">
                            <div class="card">
                                <div class="card-body table-body">
                                    <TableComponent :columns="columnNames" :tableData="tableData" />
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import TableComponent from '@/components/TableComponent.vue';

export default{
    components: { 
     TableComponent 
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
