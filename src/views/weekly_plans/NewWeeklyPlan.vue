<template>
    <AlertComponent ref="alert"/>
    <div class="tab-pane fade show active" id="new-weekly-plan" role="tabpanel" aria-labelledby="new-weekly-plan">
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
                                <label for="" class="col-form-label required">{{ $t('close_date') }}</label>
                                <div class="col-lg-4">
                                    <input type="date" class="form-control" placeholder="dd/mm/yy">
                                </div>
                            </div>
                            <div class="form-group row mb-4">
                                <label for="" class="col-form-label required">{{ $t('price') }}</label>
                                <div class="col-lg-4 me-5">
                                    <input type="number" class="form-control" min="0">
                                </div>
                                <label for="" class="col-form-label required">{{ $t('quantity') }}</label>
                                <div class="col-lg-4">
                                    <input type="number" class="form-control" min="0">
                                </div>
                            </div>
                            <div class="form-group row mb-4">
                                <label for="" class="col-form-label required">{{ $t('product') }}</label>
                                <div class="col-lg-4 me-5">
                                    <div class="input-group">
                                        <select class="form-select" id="product-input">
                                            <option selected>Choose...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <label for="" class="col-form-label required">{{ $t('amount') }}</label>
                                <div class="col-lg-4">
                                    <input type="number" class="form-control" min="0" disabled>
                                </div>
                            </div>

                            <div class="form-group row mb-4">
                                <label for="" class="col-form-label required">{{ $t('client') }}</label>
                                <div class="col-lg-4 me-5">
                                    <div class="input-group">
                                        <select class="form-select" id="product-input">
                                            <option selected>Choose...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <label for="" class="col-form-label required">{{ $t('department') }}</label>
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
                                <label for="" class="col-form-label required">{{ $t('doctor_name') }}</label>
                                <div class="col-lg-4 me-5">
                                    <div class="input-group">
                                        <select class="form-select" id="product-input">
                                            <option selected>Choose...</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <label for="" class="col-form-label required">{{ $t('close_percent') }}</label>
                                <div class="col-lg-4">
                                    <input type="number" class="form-control" min="0" max="100">
                                </div>
                            </div>

                            <div class="form-group row mb-4">
                                <label class="col-form-label" for="forecast-notes">{{ $t('notes') }}</label>
                                <div class="col-lg-9 mb-4">
                                    <textarea class="form-control" id="forecast-notes" rows="3"></textarea>
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
    methods: {
        save(){
            this.$refs.alert.showAlert('success', 'Weekly Plan Saved Successfully')
        }
    }
}
</script>
