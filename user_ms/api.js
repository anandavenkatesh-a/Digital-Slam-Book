

const User = require('./User');


module.exports.create = async (user) => {
    try{
         const new_user = new User(user);
         await new_user.save();
         return true;
    }
    catch{
         return false;
    }     
};