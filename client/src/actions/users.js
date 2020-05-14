import axios from '../config/axios'

export const register = (user) => {
    return {
        type: 'REGISTER',
        payload: user
    }
}

export const startRegister = (user) => {
    return(dispatch) => {
        axios.post('/users/register', user)
            .then((response) => {
                const user = response.data
                dispatch(register(user))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const login = (user) => {
    return {
        type: 'LOGIN',
        payload: user
    }
}

export const startLogin = (user) => {
    return(dispatch) => {
        axios.post('/users/login', user)
        .then((response) => {
            console.log(response.data)
            const token = response.data
            dispatch(login(token))
            localStorage.setItem('x-auth', token)
        })
        .catch((err) => {
            console.log(err)
        })
    }
}