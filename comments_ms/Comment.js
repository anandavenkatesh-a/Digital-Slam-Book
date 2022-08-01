

const mongoose = require('mongoose');


const commentSchema = new mongoose.Schema({
    from:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    to:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    q1:{
        type:String
    },
    q2:{
        type:String
    },
    q3:{
        type:String
    },
    q4:{
        type:String
    },
    q5:{
        type:String
    },
    // friend_from:{
    //     type:Boolean,
    //     required:true,
    // },
    // friend_to:{
    //     type:Boolean,
    //     required:true,
    // }
},{
    timestamps:true
});


const Comment = mongoose.model('Comment',commentSchema);
module.exports = Comment;