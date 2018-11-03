const mongoose= require('../common/connection');
const schema = mongoose.Schema;
var userSchema= new schema({

    "username": String,
    "password": String,
    
});

var userModel=mongoose.model('users',userSchema);
module.exports=userModel;