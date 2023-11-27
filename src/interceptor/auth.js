import axios from 'axios'

async function isAuthenticated(){
    let expired = localStorage.getItem('expiresAt')

    if (Date.now() > Date.parse(expired)){
        console.log('token expired')
        localStorage.removeItem('token')
        localStorage.removeItem('refreshToken')
        localStorage.removeItem('expiresAt')
        return false
    }
    if (localStorage.getItem('token') == null || localStorage.getItem('refreshToken') == null){
        return false
    }

    let refreshToken = localStorage.getItem('refreshToken')
    let token = localStorage.getItem('token')

    try{
        let response = await axios.post('auth/refresh_token', {'token':token,'refreshToken':refreshToken})
        if(response.status == 200){
            console.log('referesh token recieved')
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('refreshToken', response.data.refreshToken)
            localStorage.setItem('expiresAt', response.data.expiresAt)
            return true;
        }
    }
    catch(error){
        console.log('refresh error: ',error)
        localStorage.removeItem('token')
        localStorage.removeItem('refreshToken')
        localStorage.removeItem('expiresAt')
        return false;
    }
    return false;
 }

 export {isAuthenticated}