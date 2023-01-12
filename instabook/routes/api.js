var express = require('express');
const user = require('../models/user');
var router = express.Router();

const User = require("../models/user")

/// GET APIs ///


/// POST APIs ///
// POST send friend request
router.post('/api/user/:id', (req, res) => {
    
})

module.exports = router