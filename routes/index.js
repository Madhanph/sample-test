var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Anjac', name: 'madhan', rollno: '21' });
});

router.get("/register", (req, res) => {
    res.render("register")
})

module.exports = router;