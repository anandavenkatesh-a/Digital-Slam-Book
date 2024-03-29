

const router = require('express').Router();
const user_router = require('./user_ms/router');
const comment_router = require('./comments_ms/routers/index');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/user_profile')
    },
    filename: function (req, file, cb) {
      cb(null, req.user.name)
    }
  })
const upload = multer({ storage: storage })
router.use('/user',user_router);
router.use('/comment',comment_router);


router.post('/profile',upload.single('avatar'),(req,res) => {
    console.log(req.body);
    console.log(req.file);
    res.redirect('back');
});

router.get('/profile_pic_upload',(req,res) => {
    res.render('upload_form');
});
module.exports = router;