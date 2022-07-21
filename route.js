

const router = require('express').Router();


//routes for rendering pages
router.get('/auth',(req,res) => {
    res.render('auth');
});

router.get('/home',(req,res) => {

});

router.get('/user/profile',(req,res) => {
      
});
module.exports = router;