

const router = require('express').Router();
const User = require('./user_ms/api');

//routes for rendering pages
router.get('/user/sign-in',(req,res) => {
    res.render('sign_in');
});

router.get('/home',(req,res) => {

});

router.get('/user/profile',(req,res) => {
      
});
//routers for functionalities
router.post('/user/auth',async (req,res) => {
     console.log(req.body);
     await User.create(req.body);
     res.redirect('back');
});
module.exports = router;