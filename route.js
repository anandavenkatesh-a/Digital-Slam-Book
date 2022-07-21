

const router = require('express').Router();
const user_router = require('./user_ms/router');

router.use('/user',user_router);

module.exports = router;