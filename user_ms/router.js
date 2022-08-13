

const router = require('express').Router();
const controller = require('./controller');
const User = require('./User');
const passport = require('passport');
const customMiddleware = require('../custom_middleware.js');
router.get('/sign-in',passport.notAuth,controller.render_sign_in);
router.get('/sign-out',controller.sign_out);
router.get('/sign-up',passport.notAuth,controller.render_sign_up);
router.post('/auth',controller.haveAccount,passport.authenticate('local', { failureRedirect: '/user/sign-in' }),(req,res) => {
    res.redirect('/user/home');
});
router.post('/create',controller.create);
router.get('/home',passport.checkAuthentication,(req,res,next) => {
    console.log('on the way to home,auth done');
    next();
},customMiddleware.create_comments,controller.render_home);


router.get('/profile',passport.checkAuthentication,controller.profile)
router.post('/profile/update',passport.checkAuthentication,controller.updateProfile)

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './assets/uploads/user_profile')
    },
    filename: function (req, file, cb) {
      cb(null, req.user.name)
    }
  })
const upload = multer({ storage: storage })


router.post('/username_exits',controller.usernameExists);
router.post('/profile/pic_upload',passport.checkAuthentication,upload.single('avatar'),controller.picUpload);
module.exports = router;