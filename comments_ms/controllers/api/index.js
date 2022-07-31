

const User = require('../../../user_ms/User');
const { countDocuments } = require('../../Comment');
const Comment = require('../../Comment');
module.exports.get_comments = async (req,res) => {
    try{
        const comments = await Comment.find({from:req.user._id})
        .populate({path:'to',select:'name'});

        let result = [];
        let regex = new RegExp(req.body.query);

        comments.forEach((comment) => {
            if(regex.test(comment.to.name))
            {
                let r = JSON.parse(JSON.stringify(comment));
                result.push(r);
            }
        });

        return res.status(200).json({
            message:'req succesfull',
            data:result
        });
    }
    catch{
        return res.status(500).json({
            message:'falied to fetch'
        });
    }

    
    
}