var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('game', {title: 'Cigar', game: true});
});

router.get('/gallery', function (req, res, next) {
    res.render('gallery', {title: 'Cigar skins', gallery: true});
});

router.get('/rules', function (req, res, next) {
	res.render('rules', {rules: true});
});

router.get('/english', function(req, res) {
	res.render('english.html', {title: 'Agar.io Korean Server'});
});


module.exports = router;
