<template>
<AlertComponent ref="alert"/>
<div class="modal fade" id="editClient" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Edit Client</h5>
        <div class="pull-right">
            <img v-if="loading" src="../../assets/loading-bars.gif" width="60" height="40" alt="loading">
        <button ref="close" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div> 
      </div>
      <div class="modal-body">
        <form @submit.prevent="save" class="ms-5 me-5">
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
                        <input v-model.trim="website" type="url" class="form-control">
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
                <button type="submit" class="btn btn-success text-white">Update</button>
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
    emits: ["onClientEdited"],

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
        async save() {
            try{
                this.loading = true;
                const response = await axios.post(this.host+'/api/client', this.getFormData());
                if(response.status == 201){
                    this.$refs.alert.showAlert("success", "Client updated successfully");
                    this.$emit('onClientEdited', response.data);
                    this.getNextId();
                    this.clearForm();
                    this.close.click();
                    this.loading = false;
                }
                else{
                    console.log(response);
                    this.loading = false;
                    this.$refs.alert.showAlert("danger", "Error while trying to update client");
                }
            }catch(error){
                console.log(error);
                this.loading = false;
                this.$refs.alert.showAlert("danger", "Error while trying to connect to the server");
            }
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