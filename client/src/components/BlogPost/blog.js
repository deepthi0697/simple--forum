import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Blog extends React.Component{
    constructor(){
        super()
        this.state = {
            blogs : []
        }
    }

    componentWillReceiveProps = (nextProps) => {
        this.setState({
            blogs: nextProps.blogs
        })
    }



    render(){
        return ( 
            <div>
                {
                    localStorage.getItem('x-auth') ? (
                        this.state.blogs.length === 0 ? (
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
                        ) : (
                            <div>
                            <h4>List of Blog Posts - {this.state.blogs.length}</h4>

                                <div className="col s12 m6">
                                    <div className="card blue-grey darken-1">
                                        <div className="card-content white-text">
                                        {
                                             this.state.blogs.map(blog => {
                                                return (
                                                    <div>
                                                        <ul key = {blog._id}>
                                                            <li id = {blog._id}>{blog.post}</li> 
                                                            <div className="card-action">
                                                                <Link to ={`/details/${blog._id}`}>Details</Link>
                                                            </div>
                                                        </ul>
                                                    </div>
                                                ) 
                                            })
                                        
                                        }
                                   
                                        </div>
                                </div>
                                <Link to = '/addBlog' className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></Link>
                                {/* <button onClick = {this.handleAdd}>Add</button> */}
                            </div>
                           
                        </div>
                        
                        )
                    ) : ''
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
export default connect(mapStateToProps)(Blog)