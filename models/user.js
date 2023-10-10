const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
    userID: { type: String, required: true},
    password: { type: String, required: true},
    admin: { type: Boolean, required:true}
},
{
    timestamp: true
});
module.exports = mongoose.model('User',userSchema,'users');