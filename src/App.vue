<template>
    <router-view/>  
</template>

<script lang="ts">
import { app_rtl } from './assets/js/rtl';
export default {
  name: 'App',
  beforeMount(){

  },
  mounted(){
    if (document.cookie.indexOf('local=') === -1){
        document.cookie = 'local=EN';   
    }
    app_rtl();
  }
}


</script>
<style>
#app{
  display: block;
}
</style>