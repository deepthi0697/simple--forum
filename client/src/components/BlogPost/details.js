import React from 'react'
import {connect} from 'react-redux'
import axios from '../../config/axios'
// import configureStore from '../../store/configureStore'
// import { startShowBlog } from '../../actions/blogs'


class Details extends React.Component {
    constructor(){
        super()
        this.state = {
            blogs : [],
            likes: '',
            id: ''
        }
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            blogs: nextProps.blogs
        })
    }

    componentDidMount = () => {
        const id = this.props.match.params.id
        this.setState({id})
    }

    handleLike = (id) => {
        this.state.blogs.map(blog => {
            if(blog._id === id){
                const likes = blog.likes + 1
                this.setState({likes})
            }
        })

        const likes = {
            likes: this.state.likes
        }

        this.setState((prevState) => {
            return {blogs: prevState.blogs.map(blog => {
                if(blog._id === id){
                    
                    return Object.assign({}, blog, {likes: blog.likes + 1})
                } else {
                    return Object.assign({}, blog)
                }
            })}
        })
        axios.put(`/blogs/${id}`, likes,{
            headers: {
                'x-auth': localStorage.getItem('x-auth')
            }
        })

    }

    render(){
        return (
            <div className="row">
                {
                    this.state.blogs.length === 0 ?
                    (
                        <div className="preloader-wrapper big active">
                        <div className="spinner-layer spinner-blue-only">
                          <div className="circle-clipper left">
                            <div className="circle"></div>
                          </div><div className="gap-patch">
                            <div className="circle"></div>
                          </div><div className="circle-clipper right">
                            <div className="circle"></div>
                          </div>
                        </div>
                      </div>
                    ): (
                        <div className="col s7 m5">
                        <div className="card-panel teal">
                          <div className="white-text">
                              {
                                  this.state.blogs.filter(blog => blog._id === this.state.id).map(blog => {
                                      let splitDate = blog.date.split('-')
                                      const date = `${splitDate[2].slice(0,2)}-${splitDate[1]}-${splitDate[0]}` 
                                      return (
                                          <div>
                                              <h3>Title: {blog.title}</h3>
                                              <h4>Author: {blog.author ? blog.author.username : ''}</h4>
                                              <p>Date: {date}</p>
                                              <p>{blog.post}</p>
                                              <button onClick = {() => {this.handleLike(blog._id)}}>Like</button> {blog.likes}
                                          </div>
                                      )
                                  })
                              }
                          </div>
                        </div>
                      </div>
                    )
                }
          </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        blogs: state.blogs
    }
}
export default connect(mapStateToProps)(Details)