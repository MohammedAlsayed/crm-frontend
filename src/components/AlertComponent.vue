<template>
    <div v-if="show" class="alert alert-dismissible fade show container alert-front" :class="'alert-'+alertType" role="alert">
        {{ message  }}
        <!-- <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> -->
    </div>
</template>
<script lang="ts">
export default{
    data(){
        return{
            show: false,
            message: "",
            alertType: ""
            
        }
    },
    methods: {
        showAlert(type: string, message: string) {
            this.message = message;
            this.alertType = type;
            this.show = true;
        }
    },
    watch:{
        show(val){
            if (val){
                setTimeout(()=>this.show=false,5000);
            }
        }
    }
}
</script>
<style>
.alert-front {
    position: fixed !important;
    top: 10px;
    width: 100% !important;
    left: 25%;
    z-index:99999;
}
</style>