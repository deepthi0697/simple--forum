import React from 'react'
import jwt from 'jsonwebtoken'
import configureStore from '../../store/configureStore'
import { startAddBlog } from '../../actions/blogs'

class AddBlog extends React.Component { 
    constructor(){
        super()
        this.state = {
            title: '',
            post: '',
            username: ''
        }
    }

    handleChange = (e) => {
        const tokenData = jwt.verify(localStorage.getItem('x-auth'), 'jwt@123')
        const username = tokenData._id
        this.setState({
            [e.target.name]: e.target.value
        })
        this.setState({username})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const store = configureStore()
        const blog = {
            author: this.state.username,
            title: this.state.title,
            post: this.state.post
        } 
        //console.log(formData)
        store.dispatch(startAddBlog(blog))
        this.props.history.push('/')
    }

    render(){
        return (
            <div className = 'row'>
                <h3>Add blog</h3>
                <form onSubmit = {this.handleSubmit}>
                    <label htmlFor = 'title'>Title</label>
                    <input type = 'text' id = 'title' name = 'title' onChange = {this.handleChange} value = {this.state.tiitle} />

                    <label htmlFor = 'post'>Post</label>
                    {/* <input type = 'text' id = 'post' name = 'post' onChange = {this.handleChange} value = {this.state.post} /> */}
                    <textarea rows="10" cols="100" id = 'post' name = 'post' onChange = {this.handleChange} value = {this.state.post}  placeholder="write your post here"  ></textarea>

                    <input className="waves-effect waves-light btn" type = 'submit' />
                </form>
            </div>
        )
    }
}

export default AddBlog