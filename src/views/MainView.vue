<template>
    <HeaderView></HeaderView>
    <SideBar></SideBar>
    <main>
        <router-view />
    </main>
    
</template>

<script>
import HeaderView from './HeaderView.vue';
import SideBar from './SideBar.vue';
import { header_rtl } from '../assets/js/rtl';

export default{
    components:{
        HeaderView,
        SideBar,
},
    mounted(){
        header_rtl();
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
        left: var(--leftMain) !important;
        right: var(--rightMain) !important; /* for RTL*/
    }
}
</style>