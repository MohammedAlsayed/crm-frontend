<template>
  <AlertComponent ref="alert"></AlertComponent>
  <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light p-2" style="z-index: 99;">
      <div class="container-fluid">
        <!-- offcanvas trigger-->
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            <span class="navbar-toggler-icon"></span>
        </button>
      <!-- offcanvas trigger-->
      <div class="d-flex flex-grow-1">
        <span class="ms-2"></span>
        <a class="navbar-brand ps-3" href="/"><img src="../assets/images/logo1.svg" width="40" height="40" alt="logo"> {{$t('company_name')}}</a>
      </div>
      <div class="collapse navbar-collapse show" id="collapsibleNavId">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle">
            </a>
            <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownId">
              <li><a class="dropdown-item" href="#">New project...</a></li>
              <li><a class="dropdown-item" href="#">Settings</a></li>
              <li><a class="dropdown-item" href="#">Profile</a></li>
              <li @click="changeLang" v-if="this.lang == 'EN'"><a class="dropdown-item" href="#">عربي</a></li>
              <li @click="changeLang" v-if="this.lang == 'AR'"><a class="dropdown-item" href="#">English</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" v-on:click="logout">Sign out</a></li>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import i18n from '../components/i18n'
import {header_rtl} from '../assets/js/rtl' 
import axios from 'axios';
import AlertComponent from '../components/AlertComponent.vue';

export default{
    name: 'HeaderView',
    components:{
        AlertComponent
    },
    mounted(){
        let user = localStorage.getItem('token');
        if (!user){
            this.$router.push({name: 'Login'});
        }
    },
    data(){
        return{
            lang: document.cookie.split('=')[1]
        }
    },
    methods: {
      async logout(){
        try{
          let response = await axios.post('auth/logout', {token: localStorage.getItem('token'), refreshToken: localStorage.getItem('refreshToken'), userId: localStorage.getItem('userId')});
          if (response.status == 200){
            localStorage.removeItem('token');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('userId');
            this.$router.push({name: 'Login'});
          }else{
            this.$refs.alert.showAlert('danger', 'Error while trying to logout');
          }
        }catch(error){
          this.$refs.alert.showAlert('danger', 'Error while trying to logout');
        }
        
      },
      changeLang(){
          if (this.lang == 'AR'){
            i18n.global.locale = 'EN';
            document.cookie = 'local=EN'
            this.lang = 'EN';
            header_rtl();
          }
          else if (this.lang == 'EN'){
            i18n.global.locale = 'AR';
            document.cookie = 'local=AR'
            this.lang = 'AR';
            header_rtl();
          }
      }
    }
}
</script>
<style>

@media (max-width: 992px){
  #dropdownId{
      width: 60px !important;
      position: absolute !important;
      right: 0 !important;
      top: -46px !important;
      padding-left: 10px !important;
  }
}
</style>