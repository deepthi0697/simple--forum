import React from 'react'
import configureStore from '../../store/configureStore'
import { startLogin } from '../../actions/users'

class Login extends React.Component {
    constructor(){
        super()
        this.state = {
            email: '',
            password: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        const store = configureStore()
        e.preventDefault()
        const formData = {
            email : this.state.email,
            password: this.state.password
        }
        store.dispatch(startLogin(formData))
        this.props.history.push('/')
    }
    render(){
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label htmlFor = 'email'>Email</label>
                    <input type = 'text' id = 'email' name = 'email' onChange = {this.handleChange} value = {this.state.email} />
                    <br />
                    <label htmlFor = 'password'>Password</label>
                    <input type = 'password' id = 'password' name = 'password' onChange = {this.handleChange} value = {this.state.password} />
                    <br />
                    <input type ='submit' value = 'Login' />
                </form>
            </div>
        )
    }
}

export default Login