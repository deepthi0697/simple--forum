import React from 'react'

function Logout(props){
    localStorage.clear()
   props.history.push('/')
    return (
        <div>
         logged out
        </div>
    )
}

export default Logout

