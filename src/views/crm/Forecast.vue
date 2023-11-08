<template>
    <div class="container-fluid">
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
                    <SearchForecast/>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import NewForecast from '../forecast/NewForecast.vue'
import SearchForecast from '../forecast/SearchForecast.vue'

export default{
    components: { NewForecast, SearchForecast }
}
</script>