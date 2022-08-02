

const User = require('../../user_ms/User');
const Comment = require('../Comment');

module.exports.show_comments = async (req,res) => {
    try{
        const comment = await Comment.find({
            _id:req.query.id
        }).populate('to');


        return res.render('show_comment',{
            comments:comment
        });
    }
    catch(err)
    {
        console.log(err);
        return res.redirect('back');
    }

};
module.exports.update_comment = async (req,res) => {
    try{
        const comment = await Comment.findOne({
            _id:req.query.id
        });
        
        comment.q1 = req.body.q1;
        comment.q2 = req.body.q2;
        comment.q3 = req.body.q3;
        comment.q4 = req.body.q4;
        comment.q5 = req.body.q5;

        const result = await comment.save();

        return res.redirect('back');
    }
    catch(err)
    {

    }
};