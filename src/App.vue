<template>
    <router-view/>  
</template>

<script lang="ts">
export default {
  name: 'App',
  mounted(){
    document.cookie = 'local=EN'
  }
}


</script>
<style>
#app{
  display: block;
}
</style>