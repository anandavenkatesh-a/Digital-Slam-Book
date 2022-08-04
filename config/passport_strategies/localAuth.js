

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../../user_ms/User');

//authentication -local strategy (finding who is that user)
passport.use(new LocalStrategy(
    {
        usernameField:"email",
        passReqToCallback:true
    },
     (req,email,password,done) => { 
      User.findOne({email:email},(err,user) => {
            if(err)
            {
                return done(err);
            }
            
            if(user)
            {
                if(user.password == password)
                {
                    return done(null,user); // provides the user(used for serializing)
                }
            }
            return done(null,false);
      });
}));

/* Passport uses serializeUser function to persist user data (after successful 
   authentication) into session. Function deserializeUser is used to retrieve 
   user data from session.*/
   
//seralize user 
passport.serializeUser((user,done) => {
    return done(null,user._id);
});

//deserialize the user 
passport.deserializeUser((id,done) => {
    User.findById(id,(err,user) => {
        if(err)
        {
            console.log('Error in finding user details');
            return done(err);
        }

        return done(null,user);
    });
});

passport.checkAuthentication = (req,res,next) => {
    if(req.isAuthenticated())
    {
        return next();
    }  
    else
    {
        return res.redirect('/user/sign-in');
    }
};passport.authenticate('local', { failureRedirect: '/login' })

passport.setAuthenticatedUserDetails = (req,res,next) => {
   if(req.isAuthenticated())
   {
       res.locals.user = req.user;//deserialized by passport
   }
   
   return next();
};

passport.notAuth = (req,res,next) => {
     if(req.isAuthenticated())
     {
         return res.redirect('/user/home');
     }

     return next();
};

module.exports = passport;