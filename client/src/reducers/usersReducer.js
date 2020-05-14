const usersReducerInitial = []

const usersReducer = (state = usersReducerInitial, action) => {
    switch(action.type){
        case 'REGISTER': {
            return state.concat(action.payload)
        }
        case 'LOGIN': {
            return {...state.payload}
        }
        default: {
            return [...state]
        }
    }
}

export default usersReducer