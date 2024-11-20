let express = require('express')
const { registerController, loginController, getCurrentUserController } = require('../controllers/userController')
const authorizeUser = require('../middlware/authMiddlware')
let route = express.Router()
//Register || POST
route.post('/register', registerController)
//login ||POST
route.post('/login', loginController)
//get-currentUser || GET
route.get('/current-user', authorizeUser, getCurrentUserController)
module.exports = route