

const User = require('./User');
module.exports.render_sign_in = (req,res) => {
      return res.render('sign_in');
}
module.exports.haveAccount = async (req,res,next) => {
    if(req.body.email)
    {
       try{
          const user = await User.findOne({email:req.body.email}).exec();
          if(user)
          {
              next();
          }
          else
          {
              return res.redirect('/user/sign-up');
          }
       }
       catch{
          return res.redirect('back');
       }        
    }
    else
    {
       return res.redirect('back');
    }
}
module.exports.render_home = (req,res) => {
    return res.render('home');
}
module.exports.sign_out = (req,res) => {
    req.logout((err) => {
        if(err)
        {
            res.redirect('back');
            return;
        }
        res.redirect('/user/sign-in');
    });
}
module.exports.render_sign_up = (req,res) => {
    return res.render('sign_up');
}
module.exports.create = async (req,res) => {
    console.log(req.body);
    try{
         const user = await User.findOne({email:req.body.email}).exec();
         if(user)
         {
            return res.redirect('/user/sign-in');
         }
         else
         {
            const new_user = new User(req.body);
            await new_user.save();
            return res.redirect('/user/sign-in');
         }
    }
    catch{
         return res.redirect('back');
    }     
};