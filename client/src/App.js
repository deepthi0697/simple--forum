import React from 'react'
import {BrowserRouter, Route , Link, Switch} from 'react-router-dom'
import Home from './home'
import Register from './components/users/register'
import Login from './components/users/login'
import Details from './components/BlogPost/details'
import AddBlog from './components/BlogPost/addBlog'
import Logout from './components/users/logout'

function App () {
    return (
        <div>
            <BrowserRouter>
                    {
                        <nav>
                                {localStorage.getItem('x-auth') ? (
                            <Link to = '/logout'>Logout</Link>
                        ) : (
                            <div>
                                <Link to = '/login'>Login</Link> {' '}
                                <Link to = '/register'>Register</Link>
                            </div> )}
                       
                        </nav>
                        
                    }
                    
                    <Switch>    
                        <Route path = '/' component = {Home} exact = {true} />
                        <Route path='/details/:id' component={Details} exact={true} />
                        <Route path='/register' component={Register} exact={true} />
                        <Route path='/login' component={Login} exact={true} />
                        <Route path='/logout' component={Logout} exact={true} />
                        <Route path='/addBlog' component={AddBlog} exact={true} />
                    </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App