const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController');

// CRUD ............


// create users
router.post('/create', UserController.createAccunt)

// find by email
router.get('/findname/:email', UserController.findEmail)

// find by id .....
// router.get('/findid/:id',    )


// find by name

// updating a user in the database system by via id ....
router.patch('/update/user/:id',   UserController.updateUser )

// delete a user info from database
router.delete('/delete/user/:id',  UserController.DeleteUser)

module.exports = router;