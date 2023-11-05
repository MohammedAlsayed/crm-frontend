<template>
<div class="container center">
    <div class="row">
        <div class="col-md-6 login">
            <h1>{{ $t('login_page.title') }}</h1>
            <div class="form-floating">
                <div class="text-start p-1">
                    <label v-html="$t('login_page.userName')" for="username"></label>
                    <input id="username-input" class="form-control form-control text-bg" v-model="username" size="32" type="text">
                </div>
            </div>
            <div class="form-floating">
                <div class="text-start p-1">
                    <label for="password">{{ $t('login_page.password') }}</label>
                    <input class="form-control form-control text-bg" v-model="password" size="32" type="password">
                </div>
            </div>
            <div class="form-group mb-3">
                <input class="checkbox" id="remember_me" v-model="remember_me" type="checkbox"> <label for="remember_me">{{ $t('login_page.rememberMe') }}</label>
                <a id="forget-password" href="#">{{ $t('login_page.forgotPassword') }}</a>
            </div>
            <button v-on:click="login" class="form-control btn login-btn text-white">{{ $t('login_page.login') }}</button>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';
export default{
    data(){
        return{
            username: '',
            password: '',
            remember_me: false
        }
    },
    mounted(){
            let user = localStorage.getItem('user-info');
            if (user){
                this.$router.push({name: 'Home'});
            }
    },
    methods:{
        login(){
            axios.post('http://localhost:8080/api/login', {
                username: this.username,
                password: this.password,
                remember_me: this.remember_me
            })
            .then(response => {
                if(response.status == 200){
                    console.log("success");
                    console.log(response.data);
                    localStorage.setItem('user-info', response.data);
                    // localStorage.setItem('token', response.data.token);
                    this.$router.push({name: 'Overview'});
                }
                else{
                    console.log("Error!!!");
                }
            })
            .catch(error => {
                console.log(error);
            })
        },
    }
}
</script>

<style>

@media (min-width: 992px) {
.center{
    position: absolute;
    top: 0;
    transform: translate(20%, 0);
}    
}
.login{
    background: #f4f4f4;
    padding: 100px;
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
input[type=text]:focus, input[type=password]:focus{
    box-shadow: 0 0 5px hsla(160, 100%, 37%, 1);
    border: 1px solid hsla(160, 100%, 37%, 1);
}

</style>