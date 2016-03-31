var router = require('express').Router();
var db = require('mongodb').MongoClient.connect('mongodb://localhost/l2');
var _ = require('lodash');
var moment = require('moment');

router.get('/',function(req,res,next){
    var orderBy = req.params.order || "Date";
    db.then(function(db){
        return db.collection('interview').find().sort({Date:1}).toArray();
    })/*.then(function(interviews){
        return _.sortBy(interviews, function(interview){
            return moment(interview[orderBy], 'MM/DD/YYYY');
        });
    })*/
    .then(function(interviews){
        res.json(interviews);
    }).catch(next);
});

module.exports = router;
