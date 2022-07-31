

const router = require('express').Router();
const passport = require('passport');
const controller = require('../../controllers/api/index');
router.post('/get-comments',passport.checkAuthentication,controller.get_comments);
module.exports = router;