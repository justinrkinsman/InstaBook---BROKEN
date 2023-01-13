var express = require('express');
var router = express.Router();

const User = require("../models/user")
const Post = require('../models/post')

/// GET APIs ///
// GET posts for home page
router.get('/api/homepage', (req, res) => {
    Post.find({})./*sort({db_timestamp: -1})*/then((post_count) => {res.json(post_count)})
})

/// POST APIs ///
// POST send friend request
router.post('/api/user/:id', (req, res) => {
    User.updateOne( { "_id" : req.params.id }, { $push: { "friends_list.sent_requests": 'Hello'}},
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