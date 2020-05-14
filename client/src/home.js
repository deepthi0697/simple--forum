import React from 'react'
import Blog from './components/BlogPost/blog'

class Home extends React.Component{
    render(){
        return (
            <div className = 'row'>
                <h2 className = 'center-align'>Welcome to SimpleForum</h2>{
                    localStorage.getItem('x-auth') ? 
                   <Blog /> : ''
                }
            </div>
        )
    }
}

export default Home