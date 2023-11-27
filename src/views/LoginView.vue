<template>
<div class="container">
    <AlertComponent ref='alert'/>
    <form @submit.prevent="login">
        <div class="row">
            <div class="col-md-6 login">
                <h1>{{ $t('login_title') }}</h1>
                <div class="form-floating">
                    <div class="text-start p-1">
                        <label class="mb-2" for="username">{{ $t('userName') }}</label>
                        <input id="username-input" class="form-control form-control text-bg" v-model="username" size="32" type="text">
                    </div>
                </div>
                <div class="form-floating">
                    <div class="text-start p-1">
                        <label class="mb-2" for="password">{{ $t('password') }}</label>
                        <input class="form-control form-control text-bg" v-model="password" size="32" type="password">
                    </div>
                </div>
                <div class="form-group mb-3 mt-3">
                    <input class="checkbox d-inline-flex me-3" id="remember_me" v-model="remember_me" type="checkbox"> 
                    <label class="d-inline-flex" for="remember_me">{{ $t('rememberMe') }}</label>
                    <a id="forget-password" href="#">{{ $t('forgotPassword') }}</a>
                </div>
                <button type="submit" class="form-control btn login-btn text-white">{{ $t('login') }}</button>
            </div>
        </div>
    </form>
</div>
</template>

<script>
import axios from 'axios';
import AlertComponent from '../components/AlertComponent.vue'
import i18n from '../components/i18n'

const { t } = i18n.global

export default{
    components:{
        AlertComponent
    },
    data(){
        return{
            username: '',
            password: '',
            remember_me: false
        }
    },
    mounted(){
            let user = localStorage.getItem('token');
            if (user){
                this.$router.push({name: 'Home'});
            }
    },
    methods:{
        async login(){
            console.log('login');
            try{
                const response = await axios.post('auth/login', {email:this.username, password:this.password})
                if(response.status == 200){
                    localStorage.setItem('token', response.data.token);   
                    localStorage.setItem('refreshToken', response.data.refreshToken);
                    localStorage.setItem('expiresAt', response.data.expiresAt);
                    localStorage.setItem('userId', response.data.userId);
                    
                    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')
                    this.$refs.alert.showAlert('success', t('success_login'));
                    this.$router.push({name: 'Overview'});    
                }
                else{
                    console.log(response);
                    this.$refs.alert.showAlert('danger', t('fail_login'));
                }
            }
            catch(error){
                if(error.response != null && error.response.status == 401){
                    this.$refs.alert.showAlert('danger',t('fail_login'));
                }
                else{
                    this.$refs.alert.showAlert('danger',t('server_error'));
                    console.log(error);
                }
            }
        },
    }
}
</script>

<style>

@media (max-width: 992px) {
    .center{
        margin-left: 100px !important;
    }    
}
.login{
    background: #f4f4f4;
    padding: 100px 40px !important;
    width: 500px !important;
}
.login h1{
    text-align: center;
    color: #2c3e50;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: 300;
}
.login #forget-password {
    text-decoration: none;
    font-size: 15px;
    float: right;
    margin-top: 10px;
}
.login #forget-password:hover{
    text-decoration: underline;
}
/* add space between label and input */
.login label {
    white-space: nowrap;
}
.login-btn{
    background: hsla(160, 100%, 37%, 1) !important;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
}
.login-btn:hover{
    background: hsla(160, 100%, 27%, 1) !important;
}
</style>