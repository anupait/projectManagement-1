
var express = require('express');
var router = express.Router();

var userController = require('../controllers/userController');

/* GET users listing. */
router.post('/', function(req, res) {
 userController.userList(req,res);
});

router.post('/insert', function(req, res) {
    userController.userInsert(req,res);
   
});

router.get('/delete/:id', function(req, res) {
    userController.userDelete(req,res);
   
});

router.get('/edit/:id', function(req, res) {
    userController.userEdit(req,res);
   
});

router.post('/update/:id', function(req, res) {
    userController.userUpdate(req,res);
   
});

router.post('/login', function(req, res) {
    userController.userLogin(req,res);
   });

module.exports = router;
