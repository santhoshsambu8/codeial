const express = require('express');
const router = express.Router();
const passport = require('passport');

const usersController = require('../controllers/users_controller');

router.get('/profile',passport.checkAuthentication,usersController.profile);

router.get('/sign-in',usersController.signin);

router.get('/sign-up',usersController.signup);

router.post('/create',usersController.create);

//use passport as a middle ware to authenticate
router.post('/create-session',
passport.authenticate(
    'local',
    {failureRedirect: '/users/sign-up'}
),
usersController.createsession);

router.get('/sign-out',usersController.destroysession)

module.exports = router;
