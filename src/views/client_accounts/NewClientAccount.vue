<template>
    <AlertComponent ref='alert' :alert-message="$t('alert_sucess.new_client')" alert-type="alert-success"/>
    <div class="tab-pane fade show active" id="new-client-account" role="tabpanel" aria-labelledby="new-client-tab">
        <div class="row mt-4">
            <div class="col-lg-9">
                <div class="card">
                    <div class="card-header text-center">
                        <span>{{ $t('client_accounts.general_info') }}</span>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="save">
                            <div class="form-group row mb-4">
                                <label for="" class="col-lg-3 col-form-label">{{ $t('client_accounts.client_code') }}</label>
                                <div class="col-lg-9">
                                    <input type="text" class="form-control" id="client-code" placeholder="C-000829" disabled>
                                </div>
                            </div>
                            <div class="form-group row mb-4">
                                <label for="" class="col-lg-3 col-form-label">{{ $t('client_accounts.ar_client_name') }}</label>
                                <div class="col-lg-9">
                                    <input v-model="ar_client_name" type="text" class="form-control">
                                </div>
                            </div>
                            <div class="form-group row mb-4">
                                <label for="" class="col-lg-3 col-form-label required">{{ $t('client_accounts.en_client_name') }}</label>
                                <div class="col-lg-9">
                                    <input v-model.trim="en_client_name" type="text" class="form-control" required>
                                </div>
                            </div>
                            <div class="form-group row mb-4">
                                <label for="" class="col-lg-3 col-form-label">{{ $t('client_accounts.website') }}</label>
                                <div class="col-lg-9">
                                    <input v-model.trim="website" type="url" class="form-control">
                                </div>
                            </div>
                            <div class="form-group row mb-4">
                                <label for="" class="col-lg-3 col-form-label">{{ $t('client_accounts.phone') }}</label>
                                <div class="col-lg-9">
                                    <input v-model.trim="phone" type="tel" class="form-control">
                                </div>
                            </div>
                            <div class="form-group row mb-4">
                                <label for="" class="col-lg-3 col-form-label">{{ $t('client_accounts.location') }}</label>
                                <div class="col-lg-9">
                                    <input v-model.trim="location" type="text" class="form-control">
                                </div>
                            </div>
                            <div class="form-group row mb-4">
                                <label for="" class="col-lg-3 col-form-label">{{ $t('client_accounts.national_address') }}</label>
                                <div class="col-lg-9">
                                    <input v-model.trim="national_address" type="text" class="form-control">
                                </div>
                            </div>
                            <div class="d-grid gap-2 d-flex justify-content-end">
                                <!-- <button type="reset" class="btn btn-primary me-md-2 float-left">Clear</button> -->
                                <button type="submit" class="btn btn-success me-md-2 float-right">Save</button>
                            </div>
                        </form>
                        </div>
                        
                    </div>
                </div>
        </div>
    </div>
</template>

<script lang="ts"> 
import AlertComponent from '../../components/AlertComponent.vue'

export default{
    components:{
        AlertComponent
    },
    data(){
        return{
            ar_client_name: '',
            en_client_name: '',
            website: '',
            phone: '',
            location: '',
            national_address: ''
        }
    },
    watch: {
        ar_client_name(newVal, oldVal) {
            if (!this.isArabicChars(newVal) && newVal !== oldVal) {
                this.ar_client_name = "" //reset the field if the char is not arabic
            }
        }
  },
    methods: {
        save(event) {
            // call show alert method from AlertComponent.vue component 
            this.$refs.alert.showAlert();

            // `event` is the native DOM event
       },
       isArabicChars(text) {
            var arregex = /[\u0600-\u06FF]/;
            return arregex.test(text);
        },
    }
}

</script>