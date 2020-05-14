import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'
import { startGetBlogs } from './actions/blogs'
import 'materialize-css/dist/css/materialize.min.css'

const store = configureStore()
store.dispatch(startGetBlogs())

const jsx =(<Provider store = {store}>
                <App/>
            </Provider>)
ReactDom.render(jsx, document.getElementById('root'))