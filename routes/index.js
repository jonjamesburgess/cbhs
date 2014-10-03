var express = require('express');
var router = express.Router();

/*
 * GET userlist.
 */
router.get('/', function(req, res) {
    var db = req.db;

    db.collection('sections').find().toArray(function (err, sectionss) {
    	db.collection('links').find({ 'section': 'index' }).toArray(function (err, linkss) {
    		res.render('index', { 
    			'title': 'please work', 
    			'sections': sectionss,
    			'links': linkss
    		});
    	});
    });
});

module.exports = router;