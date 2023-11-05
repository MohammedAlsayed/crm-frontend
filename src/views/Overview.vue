<template>
    <div class="container-fluid">
        <div class="row">
            <div class="d-flex justify-content-center col-md-12 fw-bold fs-3 pb-4">
                {{ $t('overview.target_goals') }}
            </div>
            <div class="col-lg-6">
                <div class="card mt-0">
                    <div class="card-header text-center">
                        <span>{{ $t('overview.yearly_target') }}</span>
                    </div>
                    <div class="card-body">
                        <canvas id="yearlyTarget"></canvas>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card mt-0">
                    <div class="card-header text-center">
                        <span>{{ $t('overview.employee_target') }}</span>
                    </div>
                    <div class="card-body">
                        <canvas id="employeeTarget"></canvas>
                    </div>
                </div>
            </div>
        </div>
        <div class="row pt-4 pb-4">
            <div class="col-lg-6">
                <div class="card mt-0">
                    <div class="card-header text-center">
                        <span>{{ $t('overview.expected_vs_actual_visits') }}</span>
                    </div>
                    <div class="card-body">
                        <canvas id="visits"></canvas>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card mt-0">
                    <div class="card-header text-center">
                        <span>{{ $t('overview.expected_vs_actual_sales') }}</span>
                    </div>
                    <div class="card-body">
                        <canvas id="sales"></canvas>
                    </div>
                </div>
            </div>
        </div>

        <div class="row pt-4 pb-4">
            <div class="d-flex justify-content-center col-md-12 fw-bold fs-3 pb-4">
                {{ $t('overview.po_summary') }}
            </div>
            <div class="col-lg-6">
                <div class="card mt-0">
                    <div class="card-header text-center">
                        <span>{{ $t('overview.po_yearly') }}</span>
                    </div>
                    <div class="card-body">
                        <canvas id="poYearly"></canvas>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="card mt-0">
                    <div class="card-header text-center">
                        <span>{{ $t('overview.po_quartly') }}</span>
                    </div>
                    <div class="card-body">
                        <canvas id="poQuartly"></canvas>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script lang="ts">
import Header from '../views/Header.vue';
import SideBar from '../views/SideBar.vue';
import Chart from 'chart.js/auto';
import yearlyTarget from '../charts_data/yearlyTarget.js';
import employeeTarget from '../charts_data/employeeTarget.js';
import sales from '../charts_data/sales.js';
import visits from '../charts_data/visits.js';
import poYearly from '../charts_data/poYearly.js';
import poQuartly from '../charts_data/poQuartly.js'; 

export default{
    components:{
        Header,
        SideBar,
    },
    mounted(){
        new Chart(document.getElementById('yearlyTarget'), yearlyTarget);
        new Chart(document.getElementById('employeeTarget'), employeeTarget);
        new Chart(document.getElementById('sales'), sales);
        new Chart(document.getElementById('visits'), visits)
        new Chart(document.getElementById('poYearly'), poYearly)
        new Chart(document.getElementById('poQuartly'), poQuartly)
    }
}

</script>
