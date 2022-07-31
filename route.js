

const router = require('express').Router();
const user_router = require('./user_ms/router');
const comment_router = require('./comments_ms/routers/index');

router.use('/user',user_router);
router.use('/comment',comment_router);
module.exports = router;