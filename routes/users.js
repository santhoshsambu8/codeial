const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users_controller');

router.get('/profile',usersController.profile);

router.get('/sign-in',usersController.signin);

router.get('/sign-up',usersController.signup);

router.post('/create',usersController.create);

router.post('/createsession',usersController.createsession);

router.get('/sign-out',usersController.signout);



module.exports = router;
