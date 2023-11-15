<template>
<AlertComponent ref="alert"/>
<div class="modal fade" id="createClientModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{{ $t('new_client') }}</h5>
        <div class="pull-right">
            <img v-if="loading" src="../../assets/images/loading-bars.gif" width="60" height="40" alt="loading">
        <button ref="close" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div> 
      </div>
      <div class="modal-body">
        <form @submit.prevent="create" class="ms-3 me-3">
                <div class="form-group row mb-4">
                    <div class="col-lg-3 label">
                        <label for="" class="col-form-label">{{ $t('client_code') }}</label>
                    </div>
                    <div class="col-lg-8">
                        <input type="text" class="form-control" id="client-code" :placeholder="[[ clientCode ]]" disabled>
                    </div>
                </div>
                <div class="form-group row mb-4">
                    <div class="col-lg-3 label">
                        <label for="" class="col-form-label" >{{ $t('ar_client_name') }}</label>
                    </div>
                    <div class="col-lg-8">
                        <input v-model.trim="arabicName" type="text" class="form-control">
                    </div>
                </div>
                <div class="form-group row mb-4">
                    <div class="col-lg-3 label">
                        <label for="" class="col-form-label required">{{ $t('en_client_name') }}</label>
                    </div>
                    <div class="col-lg-8">
                        <input v-model.trim="englishName" type="text" class="form-control" required>
                    </div>
                </div>
                <div class="form-group row mb-4">
                    <div class="col-lg-3 label">
                        <label for="" class="col-form-label">{{ $t('website') }}</label>
                    </div>
                    <div class="col-lg-8">
                        <input v-model.trim="website" type="url" class="form-control" placeholder="http://example.com">
                    </div>
                </div>
                <div class="form-group row mb-4">
                    <div class="col-lg-3 label">
                        <label for="" class="col-form-label">{{ $t('phone') }}</label>
                    </div>
                    <div class="col-lg-8">
                        <input v-model.trim="phone" type="text" class="form-control">
                    </div>
                </div>
                <div class="form-group row mb-4">
                    <div class="col-lg-3 label">
                        <label for="" class="col-form-label">{{ $t('city') }}</label>
                    </div>
                    <div class="col-lg-8">
                        <input v-model.trim="city" type="text" class="form-control">
                    </div>
                </div>
                <div class="modal-footer">
                <button type="submit" class="btn btn-success text-white">{{ $t('create') }}</button>
                </div>
            </form>
      </div>
     
    </div>
  </div>
</div>
</template>

<script lang="ts"> 
import AlertComponent from '../../components/AlertComponent.vue'
import axios from 'axios';
import {ref} from 'vue';

export default{
    emits: ["onClientAdded"],

    setup(){
        const close = ref();
        const loading = false;
        return {
            close,
            loading
        }
    },
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
    methods: {
        async create() {
            try{

                this.loading = true;
                const response = await axios.post('client', this.getFormData());
                if(response.status == 201){
                    this.$refs.alert.showAlert("success", "Client added successfully");
                    this.$emit('onClientAdded', response.data);
                    this.getNextId();
                    this.clearForm();
                    this.close.click();
                    this.loading = false;
                }
                else{
                    console.log(response);
                    this.loading = false;
                    this.$refs.alert.showAlert("danger", "Error while trying to add new client");
                }
            }catch(error){
                console.log(error);
                this.loading = false;
                this.$refs.alert.showAlert("danger", "Error while trying to connect to the server");
            }
       },
        async getNextId(){
            try{
                // ajax request to get the last client id from the server and set it to client_code
                const response = await axios.get('client/nextid')
                if(response.status == 200){
                    this.clientCode = response.data;
                }
                else{
                    console.log(response.data);
                }
            }
            catch(error) {
                console.log(error);
            }
        },
        clearForm(){
            this.arabicName = '';
            this.englishName = '';
            this.website = '';
            this.phone = '';
            this.location = '';
            this.loading = false;
        },
        getFormData(){
            var formData = {};
            if (this.arabicName != '') formData["arName"] = this.arabicName;
            if (this.englishName != '') formData["enName"] = this.englishName;
            if (this.website != '') formData["website"] = this.website;
            if (this.phone != '') formData["phone"] = this.phone;
            if (this.city != '') formData["city"] = this.city;
            return formData;
        },
    }
        
}


</script>