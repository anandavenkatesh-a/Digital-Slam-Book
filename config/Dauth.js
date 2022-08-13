

const dauth = require('node-dauth-verifier');
router.get("/", function(req, res, next){
    dauth.verify(req.query.username, req.query.code, req.query.hashcode).then(function(data){
        console.log("Login successful");
        // ... Logic for successful login ...
    }).catch(function(error){
        console.log("Login Failed");
        // ... Logid for failed login here ...
    });
});