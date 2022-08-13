

const User = require('./User');
module.exports.render_sign_in = (req,res) => {
      return res.render('sign_in',{layout:false});
}
module.exports.haveAccount = async (req,res,next) => {
    console.log(req.body);
    if(req.body.email)
    {
       try{
          const user = await User.findOne({email:req.body.email}).exec();
          if(user)
          {
             console.log('next'); 
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
    return res.render('sign_up',{layout:false});
}
module.exports.create = async (req,res) => {
    console.log(req.body);
    try{
         const user1 = await User.findOne({email:req.body.email}).exec();
         const user2 = await User.findOne({name:req.body.name});
         if(user1||user2)
         {
            return res.redirect('/user/sign-in');
         }
         else
         {
            if(req.body.password == req.body.confirm_password){
              const new_user = new User({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password
              });
              await new_user.save();
              return res.redirect('/user/sign-in');
            }
            else
            {
                return res.redirect('back');
            }
         }
    }
    catch{
         return res.redirect('back');
    }     
};

module.exports.profile = (req,res) => {
    return res.render('profile');
}
module.exports.updateProfile = async (req,res) => {
    try{
        let user = await User.findOne({
            _id:req.query.id
        });
    
        console.log('before',user);

        user.name = req.body.name;
        user.dept = req.body.dept;
        user.hostel = req.body.hostel;
        user.acc_year = req.body.acc_year;
        user.password = req.body.password;
    
        console.log('after',user);
        await user.save();
    
        return res.redirect('back');
    } 
    catch(err)
    {
        console.log(err);
        return res.redirect('back');
    }
};
module.exports.picUpload = async (req,res) => {
    const user = await User.findById(req.user._id);
    user.avatar = '/uploads/user_profile/'+user.name;
    await user.save();
    return res.redirect('/user/profile');
}; 

module.exports.usernameExists = async (req,res) => {
    console.log('Anand username');
    const user = await User.findOne({
       name:req.body.query
    });

    let data;
    if(user)
    {
       data = 'y';
    }
    else
    {
       data = 'n';
    }

    return res.status(200).json({
        message:'req succesfull',
        data:data
    });
};