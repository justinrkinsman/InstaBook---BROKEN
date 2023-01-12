const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: { type: String, required: true, minLength: 1 },
    first_name: { type: String, required: true, minLength: 1 },
    last_name: { type: String, required: true, minLength: 1 },
    password: { type: String, required: true, minLength: 8 },
    friends_list: { type: Schema.Types.ObjectId, ref: 'Friends_List' }
    //profile_pic: {type: }
    //feed: [{type: }]
})

module.exports = mongoose.model("User", UserSchema)