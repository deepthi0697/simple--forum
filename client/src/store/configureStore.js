import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import usersReducer from '../reducers/usersReducer'
import blogsReducer from '../reducers/blogsReducers'

const configureStore = () => {
    const store = createStore(
        combineReducers({
            users: usersReducer,
            blogs: blogsReducer
        }),applyMiddleware(thunk)
    )
    return store
}

export default configureStore

