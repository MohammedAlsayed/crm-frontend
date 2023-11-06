<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" 
                        data-bs-toggle="tab" 
                        data-bs-target="#new-client-account" 
                        type="button" 
                        role="tab"
                         aria-controls="new client" 
                         aria-selected="true">{{ $t('client_accounts.new_client_account') }}</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" data-bs-toggle="tab" data-bs-target="#add-contacts" type="button" role="tab" aria-controls="add contacts" aria-selected="false">{{ $t('client_accounts.add_contacts') }}</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" data-bs-toggle="tab" data-bs-target="#search-client" type="button" role="tab" aria-controls="search client" aria-selected="false">{{ $t('client_accounts.search_in_client_accounts') }}</button>
                    </li>
                </ul>
                <div class="tab-content">
                    <NewClientAccount/>
                    <AddContacts/>
                    <SearchClient/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import NewClientAccount from './client_accounts/NewClientAccount.vue'
import SearchClient from './client_accounts/SearchClient.vue'
import AddContacts from './client_accounts/AddContacts.vue'

export default{
    components:{
        NewClientAccount,  
        SearchClient,
        AddContacts,
},
}
</script>
