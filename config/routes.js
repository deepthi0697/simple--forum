const express = require('express')
const router = express.Router()
const authenticateUser = require('../App/middleware/userAuth')

const usersController = require('../App/controller/usersController')
const blogsController = require('../App/controller/blogsController')

router.post('/users/register', usersController.register)
router.post('/users/login', usersController.login)

router.get('/blogs', authenticateUser, blogsController.list)
router.get('/blogs/:id', authenticateUser, blogsController.show)
router.post('/blogs', authenticateUser, blogsController.create)
router.put('/blogs/:id', authenticateUser, blogsController.update)
router.delete('/blogs/:id', authenticateUser, blogsController.delete)

module.exports = router