import axios from 'axios'

const intro = axios.create({
    baseURL:'http://3.36.30.114:9999/hh-record-intro/'
})

const main = axios.create({
    baseURL:'http://3.36.30.114:9999/hh-record/'
})

// const image = axios.create({
//     baseURL:'http://3.36.30.114:9999/image/'
// })

function login(request) {
    return intro.post('login', request)
}

function signUp(request) {
    return intro.post('sign-up', request)
}

function myPageCheck(auth) {
    return main.get('my-page/',{
        headers:{
            AUTH_TOKEN:auth
        }
    })
}

export {login, signUp, myPageCheck}