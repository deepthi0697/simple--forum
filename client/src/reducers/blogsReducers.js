const blogsReducersInitial = []

const blogsReducer = (state = blogsReducersInitial, action) => {
    switch(action.type){
        case 'GET_BLOGS': {
            return [...action.payload]
        }
        case 'ADD_BLOG': {
            return state.concat(action.payload)
        }
        case 'SHOW_BLOG': {
            return {...action.payload}
        }
        default: {
            return [...state]
        }
    }
}

export default blogsReducer