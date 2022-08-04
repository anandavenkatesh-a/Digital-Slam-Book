

const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    hostel:{
        type:String,
        default:''
    },
    acc_year:{
        type:String,
        default:''
    },
    dept:{
        type:String,
        default:''
    },
    avatar:{
        type:String,
        default:'https://iconape.com/wp-content/files/im/10836/png/iconfinder_3_avatar_2754579.png'
    }
 },{
     timestamps:true
 });
 
 
 const User = mongoose.model('User',userSchema);
 module.exports = User;