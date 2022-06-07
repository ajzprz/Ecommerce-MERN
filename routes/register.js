const express = require('express');
const router = new express.Router();
const {registerUser, updateUser} = require('../controllers/register');

const {validate} = require('../middlewares/auth')

router.post('/', validate,registerUser)

router.put('/',updateUser)

module.exports = router;
