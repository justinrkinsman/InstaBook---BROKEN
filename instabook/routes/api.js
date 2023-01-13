var express = require('express');
const user = require('../models/user');
var router = express.Router();

const User = require("../models/user")

/// GET APIs ///


/// POST APIs ///
// POST send friend request
router.post('/api/user/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, {_id: req.params.id, $push: {friends_list: 'Hello'}},
        function(err, docs) {
            if (err) {
                console.log(err)
            }else{
                console.log('Update User :', docs)
            }
        })
    return res.send(`It works brah`)
})

module.exports = router