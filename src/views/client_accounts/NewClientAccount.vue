<template>
    <AlertComponent ref='alert'/>
    <div class="tab-pane fade show active" id="new-client-account" role="tabpanel" aria-labelledby="new-client-tab">
        <div class="row mt-4">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header text-center">
                        <span>{{ $t('general_info') }}</span>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="save" class="ms-5 me-5">
                            <div class="form-group row mb-4">
                                <label for="" class="col-lg-3 col-form-label required">{{ $t('client_code') }}</label>
                                <div class="col-lg-9">
                                    <input type="text" class="form-control" id="client-code" :placeholder="[[ clientCode ]]" disabled>
                                </div>
                            </div>
                            <div class="form-group row mb-4">
                                <label for="" class="col-lg-3 col-form-label" >{{ $t('ar_client_name') }}</label>
                                <div class="col-lg-9">
                                    <input v-model.trim="arabicName" type="text" class="form-control">
                                </div>
                            </div>
                            <div class="form-group row mb-4">
                                <label for="" class="col-lg-3 col-form-label required">{{ $t('en_client_name') }}</label>
                                <div class="col-lg-9">
                                    <input v-model.trim="englishName" type="text" class="form-control" required>
                                </div>
                            </div>
                            <div class="form-group row mb-4">
                                <label for="" class="col-lg-3 col-form-label">{{ $t('website') }}</label>
                                <div class="col-lg-9">
                                    <input v-model.trim="website" type="url" class="form-control">
                                </div>
                            </div>
                            <div class="form-group row mb-4">
                                <label for="" class="col-lg-3 col-form-label">{{ $t('phone') }}</label>
                                <div class="col-lg-9">
                                    <input v-model.trim="phone" type="tel" class="form-control">
                                </div>
                            </div>
                            <div class="form-group row mb-4">
                                <label for="" class="col-lg-3 col-form-label">{{ $t('city') }}</label>
                                <div class="col-lg-9">
                                    <input v-model.trim="city" type="text" class="form-control">
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
import axios from 'axios';

export default{
    emits: ["onClientAdded"],
    components:{
        AlertComponent
    },
    mounted(){
        this.getNextId();
    },
    data(){
        return{
            clientCode: '',
            arabicName: '',
            englishName: '',
            website: '',
            phone: '',
            city: '',
        }
    },
    watch: {
        ar_client_name(newVal, oldVal) {
            if (!this.isArabicChars(newVal) && newVal !== oldVal) {
                this.ar_client_name = "" //reset the field if the char is not arabic
                this.$refs.alert.showAlert("warning", "Only Arabic text is allowed");
            }
        }
  },
    methods: {
        save() {
            axios.post(this.host+'/api/client', {
                id: this.clientCode,
                arabicName: this.arabicName,
                englishName: this.englishName,
                website: this.website,
                phone: this.phone,
                city: this.city,
            }).then(response => {
                if(response.status == 201){
                    this.$refs.alert.showAlert('success', "Client account created successfully");
                    // clear the form
                    const newClient = [this.clientCode, this.arabicName, this.englishName, this.website, this.phone, this.city]
                    this.$emit('onClientAdded', newClient)
                    this.clearForm()
                    this.getNextId()
                }
                else{
                    console.log(response.data);
                    this.$refs.alert.showAlert('danger', "Error couldn't save client account");
                }
            })
            .catch(error => {
                this.$refs.alert.showAlert('danger', "Error couldn't save client account");
                console.log(error);
            })

       },
       isArabicChars(text) {
            var arregex = /[\u0600-\u06FF]/;
            return arregex.test(text);
        },
        getNextId(){
            // ajax request to get the last client id from the server and set it to client_code
            axios.get(this.host+'/api/client/nextid')
            .then(response => {
                if(response.status == 200){
                    this.clientCode = response.data;
                }
                else{
                    console.log(response.data);
                }
            })
            .catch(error => {
                console.log(error);
            })
        },
        clearForm(){
            this.arabicName = '';
            this.englishName = '';
            this.website = '';
            this.phone = '';
            this.location = '';
        },
        
    }
}

</script>