var mongoose = require('mongoose');
var UserSchema  = new mongoose.Schema({
    first_name: String,
    last_name:String,
    username:String,
    email:String,
    password:String,
    status:Number,
    created_date:{ type: Date, default: Date.now },
    updated_date:{ type: Date, default: Date.now }
});
var User = mongoose.model('User',UserSchema);

module.exports = User;