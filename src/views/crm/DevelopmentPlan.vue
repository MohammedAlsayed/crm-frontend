<template>
    <div class="container-fluid">
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
                    <SearchDevPlan/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import NewDevPlan from '../development_plan/NewDevPlan.vue';
import SearchDevPlan from '../development_plan/SearchDevPlan.vue'

export default{
    components: { NewDevPlan, SearchDevPlan, }
}
</script>
