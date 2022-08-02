

const router = require('express').Router();
const api = require('./api/index');
const comment_controller = require('../controllers/index');
const passport = require('passport');
router.use('/api',api);
router.get('/show-comment',passport.checkAuthentication,comment_controller.show_comments);
router.post('/update',passport.checkAuthentication,comment_controller.update_comment);
module.exports = router;