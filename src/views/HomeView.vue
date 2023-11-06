<template>
    <Header></Header>
    <SideBar></SideBar>
    <main class="mt-2 pt-2 container-fluid">
        <router-view />
    </main>
    
</template>

<script>
import Header from '../views/Header.vue';
import SideBar from '../views/SideBar.vue';

export default{
    components:{
    Header,
    SideBar,
},
    mounted(){
        let user = localStorage.getItem('user-info');
        if (!user){
            this.$router.push({name: 'Login'});
        }
    }

}
</script>
<style>

@media (min-width: 992px) {
    main{
        position: relative;
    }
}
</style>