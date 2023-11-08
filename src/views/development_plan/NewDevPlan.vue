<template>
    <AlertComponent ref="alert"/>
    <div class="tab-pane fade show active" id="new-dev-plan" role="tabpanel" aria-labelledby="new-dev-plan">
        <div class="row mt-4">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header text-center">
                        <span>{{ $t('general_info') }}</span>
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="save" class="ms-4 me-4">
                            <div class="form-group row mb-4">
                                <label for="" class="col-form-label required">{{ $t('date') }}</label>
                                <div class="col-lg-4 me-5">
                                    <input type="month" class="form-control" placeholder="dd/mm/yy">
                                </div>
                                <label class="col-form-label required" for="product-input">{{ $t('product') }}</label>
                                <div class="col-lg-4">
                                    <div class="input-group">
                                        <select class="form-select" id="product-input">
                                            <option selected>Choose...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group row mb-4">
                                <label for="product-dev-plan" class="col-form-label required">{{ $t('dev_plan_action') }}</label>
                                <div class="col-lg-4 me-5">
                                    <div class="input-group">
                                        <select class="form-select" id="product-dev-plan">
                                            <option selected>Choose...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>

                                <label class="col-form-label required" for="product-dev-status">{{ $t('dev_plan_status') }}</label>
                                <div class="col-lg-4">
                                    <div class="input-group">
                                        <select class="form-select" id="product-dev-status">
                                            <option selected>Choose...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group row mb-4">
                                <label for="client" class="col-form-label required">{{ $t('client') }}</label>
                                <div class="col-lg-4 me-5">
                                    <div class="input-group">
                                        <select class="form-select" id="client">
                                            <option selected>Choose...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>

                                <label class="col-form-label required" for="department">{{ $t('department') }}</label>
                                <div class="col-lg-4">
                                    <div class="input-group">
                                        <select class="form-select" id="department">
                                            <option selected>Choose...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group row mb-4">
                                <label for="doctor-name" class="col-form-label required">{{ $t('doctor_name') }}</label>
                                <div class="col-lg-4 me-5">
                                    <div class="input-group">
                                        <select class="form-select" id="doctor-name">
                                            <option selected>Choose...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>

                                <label class="col-form-label" for="product-input">{{ $t('sales_man') }}</label>
                                <div class="col-lg-4">
                                    <input type="text" class="form-control" id="client-code" placeholder="0016: Hassan Raza" disabled>
                                </div>
                            </div>

                            <div class="form-group row mb-4">
                                <label class="col-form-label" for="dev-plan-notes">{{ $t('notes') }}</label>
                                <div class="col-lg-9">
                                    <textarea class="form-control" id="dev-plan-notes" rows="3"></textarea>
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
import AlertComponent from '@/components/AlertComponent.vue'

export default{
    components: { AlertComponent },
    methods:{
        save(){
            this.$refs.alert.showAlert('success', 'Created New Development Plan Successfully');
        }
    }
}
</script>