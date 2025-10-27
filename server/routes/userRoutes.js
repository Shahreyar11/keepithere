const express = require('express');
const { handleSignUp } = require('../controllers/usercontroller')
const router = express.Router();

router.post("/signup", handleSignUp);

module.exports = router