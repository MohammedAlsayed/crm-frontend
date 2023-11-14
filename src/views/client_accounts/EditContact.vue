<template>
    <AlertComponent ref="alert"/>
    <div class="modal fade" id="editContactModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ $t('edit_contact') }}</h5>
            <div class="pull-right">
                <img v-if="loading" src="../../assets/loading-bars.gif" width="60" height="40" alt="loading">
            <button ref="close" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div> 
          </div>
          <div class="modal-body">
            <form @submit.prevent="update" class="ms-3 me-3">
                    <div class="form-group row mb-4">
                        <div class="col-lg-3 label">
                            <label for="" class="col-form-label" >{{ $t('arabic_name') }}</label>
                        </div>
                        <div class="col-lg-8">
                            <input v-model.trim="arabicName" type="text" class="form-control">
                        </div>
                    </div>
                    <div class="form-group row mb-4">
                        <div class="col-lg-3 label">
                            <label for="" class="col-form-label required">{{ $t('english_name') }}</label>
                        </div>
                        <div class="col-lg-8">
                            <input v-model.trim="englishName" type="text" class="form-control" required>
                        </div>
                    </div>
                    <div class="form-group row mb-4">
                        <div class="col-lg-3 label">
                            <label for="" class="col-form-label">{{ $t('grade') }}</label>
                        </div>
                        <div class="col-lg-8">
                            <input v-model.trim="grade" type="text" class="form-control">
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
                            <label for="" class="col-form-label">{{ $t('email') }}</label>
                        </div>
                        <div class="col-lg-8">
                            <input v-model.trim="email" type="text" class="form-control">
                        </div>
                    </div>
                    <div class="form-group row mb-4">
                        <div class="col-lg-3 label">
                            <label for="" class="col-form-label">{{ $t('department') }}</label>
                        </div>
                        <div class="col-lg-8">
                            <input v-model.trim="department" type="text" class="form-control">
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
import axios from 'axios';
import AlertComponent from '@/components/AlertComponent.vue';

export default{
    emits: ["onContactEdited"],
    components: {
        AlertComponent
    },
    props: {
        contactInfo: {
            type: Object,
            required: true
        },
    },
    watch:{
        contactInfo: {
            deep: true, 
            handler (val) {
                this.arabicName = this.contactInfo.arName;
                this.englishName = this.contactInfo.enName;
                this.email = this.contactInfo.email;
                this.grade = this.contactInfo.grade;
                this.phone = this.contactInfo.phone;
                this.department = this.contactInfo.department;
            }
        }
    },
    data(){
        return{
            // contact form
            arabicName: '',
            englishName: '',
            email: '',
            grade: '',
            department: '',
            phone: '',
            loading: false,
        }
    },
    methods:{
        async update(){
            try{
                this.loading = true;
                const updatedContact = this.getFormData();
                const response = await axios.put(this.host+'/api/contact/'+updatedContact.id, updatedContact)
                if(response.status == 204){
                    this.loading = false;
                    this.$refs.alert.showAlert('success', 'Contact updated successfully');
                    this.$emit('onContactEdited', updatedContact);
                    this.$refs.close.click();
                    this.resetForm();
                }
                else{
                    console.log('error1: ',response)
                    this.loading = false;
                    this.$refs.alert.showAlert('danger', 'Error while trying to update contact');
                }
            }
            catch(error){
                console.log('error2: ',error)
                this.loading = false;
                this.$refs.alert.showAlert('danger', 'Error while trying to update contact');
            }
        },
        getFormData(){
            var formData = {};
            formData['clientId'] = this.contactInfo.clientId;
            formData["id"] = this.contactInfo.id;
            if (this.arName != '') formData["arName"] = this.arabicName;
            if (this.enName != '') formData["enName"] = this.englishName;
            if (this.email != '') formData["email"] = this.email;
            if (this.grade != '') formData["grade"] = this.grade;
            if (this.department != '') formData["department"] = this.department;
            if (this.phone != '') formData["phone"] = this.phone;
            return formData;
        },
        resetForm(){
            this.arabicName = '';
            this.englishName = '';
            this.email = '';
            this.grade = '';
            this.department = '';
            this.phone = '';
        },
    }
}




</script>