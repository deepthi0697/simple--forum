import React from 'react'
import configureStore from '../../store/configureStore'
import { startRegister } from '../../actions/users'

class Register extends React.Component {
    constructor(){
        super()
        this.state = {
            username: '',
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
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        store.dispatch(startRegister(formData))
        alert('You have registered successfully')
        this.props.history.push('/')
    }
    render(){
        return (
            <div>
                <h2>Register with us</h2>
                <form onSubmit = {this.handleSubmit}>
                    <label htmlFor = 'username'>Username</label>
                    <input type = 'text' id = 'username' name = 'username' onChange = {this.handleChange} value = {this.state.username} />
                    <br />
                    <label htmlFor = 'email'>Email</label>
                    <input type = 'text' id = 'email' name = 'email' onChange = {this.handleChange} value = {this.state.email} />
                    <br />
                    <label htmlFor = 'password'>Password</label>
                    <input type = 'password' id = 'password' name = 'password' onChange = {this.handleChange} value = {this.state.password} />
                    <br />
                    <input type = 'submit' value = 'Register'/>
                </form>
            </div>
        )
    }
}


export default Register