const express = require('express');
const router = new express.Router();

const welcomeUser = require('../controllers/login');
const {authorize} = require('../middlewares/auth');

router.post('/', authorize,welcomeUser)

module.exports = router;

