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
  position: absolute;
  left: calc(10%);
  right: calc(0%);
  display: block;
  top: var(--topNavBarHeight);
}
@media (min-width: 992px){
  #app{
    left: var(--offcanvas-width);
  }
}
</style>