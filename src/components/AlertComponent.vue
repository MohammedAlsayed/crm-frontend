<template>
    <div v-if="show" class="alert alert-dismissible fade show" :class="alertType" role="alert" style="width: 70%;">
        {{ alertMessage  }}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
</template>
<script lang="ts">
export default{
    data(){
        return{
            show: false
        }
    },
    props: {
            alertMessage: {
            type: String,
            required: true,
            default: () => "This is a success alert—check it out!",
            },
            alertType: {
            type: String,
            required: true,
            default: () => "alert-success",
            validator: (value) => ["alert-success", "alert-danger"].includes(value),
            },
    },
    methods: {
        showAlert() {
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
.alert-fixed {
    width: 100%;
    z-index:9999; 
    border-radius:0px
}
</style>