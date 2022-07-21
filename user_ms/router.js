

const router = require('express').Router();
const controller = require('./controller');
const User = require('./User');
const passport = require('passport');
router.get('/sign-in',controller.render_sign_in);
router.get('/sign-out',controller.sign_out);
router.get('/sign-up',controller.render_sign_up);
router.post('/auth',controller.haveAccount,passport.authenticate('local', { failureRedirect: '/user/sign-in' }),(req,res) => {
    res.redirect('/user/home');
});
router.post('/create',controller.create);
router.get('/home',controller.render_home);

module.exports = router;