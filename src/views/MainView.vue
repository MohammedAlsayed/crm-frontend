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
import axios from 'axios';

export default{
    components:{
        HeaderView,
        SideBar,
},
    beforeMount(){
        console.log("main vue before mounted")
        this.authenticate();
    },
    mounted(){
        console.log("main vue mounted")
        header_rtl();
    },
    methods:{
        async authenticate(){
            let token = localStorage.getItem('token');
            try{
                const response = await axios.post('login/authenticate/'+token);
                if (response.status != 200){
                    console.log("not authenticated")
                    localStorage.removeItem('token');
                    this.$router.push({name: 'Login'});
                }else{
                    console.log("authenticated")
                }
            }catch(error){
                localStorage.removeItem('token');
                this.$router.push({name: 'Login'});
            }
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