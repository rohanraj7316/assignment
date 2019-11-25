const express = require('express');
const router = express.Router();

// importing the controllers
const HealthController = require('./controllers/health');
const CreateUserController = require('./controllers/create');
const ReadAllUserController = require('./controllers/read_all');
const UpdateUserController = require('./controllers/update');
const DeleteUserController = require('./controllers/delete');


// GET health check
router.get('/health', HealthController);

// GET get all user.
router.get('/user', ReadAllUserController);

// POST create user.
router.post('/user', CreateUserController);

// PUT update user.
router.put('/user', UpdateUserController);

// DELETE delete user.
router.delete('/user', DeleteUserController);

module.exports = router;