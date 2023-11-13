<template>
<AlertComponent ref="alert"/>
<div class="modal fade" id="editClientModal" tabindex="-1" aria-hidden="true">
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
        <form @submit.prevent="update" class="ms-3 me-3">
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

    props: {
        clientObj:{
            type: Object,
            required: true,
            default: () => {}
        },
    },
    setup(){
        const close = ref();
        const loading = false;

        return {
            close,
            loading,
        }
    },
    data(){
        return {
            clientCode :  "",
            arabicName :  "",
            englishName :  "",
            website :  "",
            phone :  "",
            city :  "",
        }
    },
    watch:{
        clientObj: {
            deep: true, 
            handler (val) {
                this.clientCode = val.id;
                this.arabicName = val.arName;
                this.englishName = val.enName;
                this.website = val.website;
                this.phone = val.phone;
                this.city = val.city;
            }
        }
    },
    components:{
        AlertComponent
    },
    methods: {
        async update() {
            try{
                this.loading = true;
                const updatedRecord = this.getFormData();
                const response = await axios.put(this.host+'/api/client/'+this.clientCode, updatedRecord);
                if(response.status == 204){
                    this.$refs.alert.showAlert("success", "Updated successfully");
                    this.$emit('onClientEdited', updatedRecord);
                    this.close.click();
                    this.loading = false;
                }
                else{
                    this.loading = false;
                    console.log('error update: ',response);
                    this.$refs.alert.showAlert("danger", "Error while trying to update");
                }
            }catch(error){
                console.log('error update: ',error);
                this.loading = false;
                this.$refs.alert.showAlert("danger", "Error while trying to update");
            }
       },
        getFormData(){
            var formData = {};
            formData['rowIdx'] = this.clientObj.rowIdx;
            if (this.clientCode != '') formData["id"] = this.clientCode;
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