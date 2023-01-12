const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: { type: String, required: true, minLength: 1 },
    first_name: { type: String, required: true, minLength: 1 },
    last_name: { type: String, required: true, minLength: 1 },
    password: { type: String, required: true, minLength: 8 },
    friends_list: [{ type: String, required: true }]
    //profile_pic: {type: }
    //feed: [{type: }]
})

module.exports = mongoose.model("User", UserSchema)