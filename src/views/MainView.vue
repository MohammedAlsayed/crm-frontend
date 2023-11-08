<template>
    <Header></Header>
    <SideBar></SideBar>
    <main>
        <router-view />
    </main>
    
</template>

<script>
import Header from './Header.vue';
import SideBar from './SideBar.vue';

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
main{
    position: absolute;
    width: 80vw !important;
    top: 80px !important;
    
}
@media (min-width: 992px){
    main{
        left: calc(var(--offcanvas-width) + 20px) !important;
    }
}
</style>