<template>
<div class="container">
    <AlertComponent ref='alert'/>
    <div class="row">
        <div class="col-md-6 login">
            <h1>{{ $t('login_title') }}</h1>
            <div class="form-floating">
                <div class="text-start p-1">
                    <label for="username">{{ $t('userName') }}</label>
                    <input id="username-input" class="form-control form-control text-bg" v-model="username" size="32" type="text">
                </div>
            </div>
            <div class="form-floating">
                <div class="text-start p-1">
                    <label for="password">{{ $t('password') }}</label>
                    <input class="form-control form-control text-bg" v-model="password" size="32" type="password">
                </div>
            </div>
            <div class="form-group mb-3">
                <input class="checkbox" id="remember_me" v-model="remember_me" type="checkbox"> <label for="remember_me">{{ $t('rememberMe') }}</label>
                <a id="forget-password" href="#">{{ $t('forgotPassword') }}</a>
            </div>
            <button v-on:click="login" class="form-control btn login-btn text-white">{{ $t('login') }}</button>
        </div>
    </div>
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
            try{
                const response = await axios.post('login', {enName:this.username, password:this.password})
                if(response.status == 200){
                    localStorage.setItem('token', response.data);   
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
                if(error.response.status == 401){
                    this.$refs.alert.showAlert('danger',t('fail_login'));
                }
                console.log(error);
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
    margin-bottom: 10px;
    margin-top: 10px;
    padding: 0px 5px;
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