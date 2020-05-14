import axios from '../config/axios'

export const getBlog = (blog) => {
    return {
        type: 'GET_BLOGS',
        payload: blog
    }
}

export const startGetBlogs = () => {
    return(dispatch) => {
        axios.get('/blogs', {
            headers: {
                'x-auth': localStorage.getItem('x-auth')
                }
            } )
            .then((response) => {
                const blogs = response.data
                dispatch(getBlog(blogs))
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export const addBlog = (blog) => {
    return {
        type: 'ADD_BLOG',
        payload: blog
    }
}

export const startAddBlog = (blog) => {
    return(dispatch) => {
        axios.post('/blogs', blog, {
            headers: {
                'x-auth': localStorage.getItem('x-auth')
            }
        })
        .then((response) => {
            const blog = response.data
            dispatch(addBlog(blog))
            alert('Successfully submitted')
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export const showBlog = (blog) => {
    return {
        type: 'SHOW_BLOG',
        payload: blog
    }
}

export const startShowBlog = (id) => {
    return(dispatch) => {
        axios.get('/blogs/:id', {
            headers: {
                'x-auth': localStorage.getItem('x-auth')
            }
        })
        .then((response) => {
            const blog = response.data
            dispatch(showBlog(blog))
        })
        .catch((err) => {
            console.log(err)
        })
    }
}