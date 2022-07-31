

const User = require('./user_ms/User');
const Comment = require('./comments_ms/Comment');
Comment.collection.dropIndexes((err,results) => {});
module.exports.create_comments = async (req,res,next) => {
   const users = await User.find({}).select('_id');
   try{
    for(user of users)
    {
      console.log('Anand',user); 
      if(user.id != req.user.id )
       {
         const comment  = await Comment.find({
              from:req.user._id,
              to:user._id
          });
         
          if(comment.length == 0)
          {
            const new_comment = new Comment({
                 from:req.user._id,
                 to:user._id,
                 q1:'',
                 q2:'',
                 q3:'',
                 q4:'',
                 q5:''
             });

            const result = await new_comment.save();
          }
       }
    }
   }
   catch(err){
      console.log(err);
      return res.redirect('/user/sign-up');
   }
   
   next();  
};