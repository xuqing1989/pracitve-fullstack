var router = require('express').Router();
var db = require('mongodb').MongoClient.connect('mongodb://localhost/l2');

router.get('/',function(req,res,next){
    db.then(function(db){
        return db.collection('interview').find().toArray();
    }).then(function(interviews){
        res.json(interviews);
    }).catch(next);
});

module.exports = router;
