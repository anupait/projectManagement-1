
var User = require('../models/User');

exports.userList = function(req, res) {
    User.find().then((result) => {
     res.status(200).send({status:200,message:"Data has been fetched",data:result});
    });
};



exports.userInsert =function(req, res) {
const data = {
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
        status:req.body.status
 };


 userData = new User(data);
 userData.save(data).then(() => {
    res.status(200).send({status:200,message:"Data has been inserted"});
  }).catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Tutorial."
    });
  });
};


exports.userDelete = function(req, res) {
  User.findByIdAndRemove(req.params.id,((err,doc)=>{
       if(!err){
          User.find().then((result) => {
          res.status(200).send({status:200,message:"Data has been fetched after deletion",data:result});
         });
       } else {
        res.status(500).send({status:500,message:err});
       }
  })
  );
};


exports.userEdit = function(req, res) {
  User.find({_id:req.params.id}).then((result) => {
   res.status(200).send({status:200,message:"Data has been updated",data:result});
  });
  
};


exports.userUpdate = function(req, res) {
  const data = {
    first_name:req.body.first_name,
    last_name:req.body.last_name,
    username:req.body.username,
    email:req.body.email,
    password:req.body.password,
    status:req.body.status
};
  User.findOneAndUpdate({_id:req.params.id}, data, function (err, place) {
    res.status(200).send({status:200,message:"Data has been updated",data:data});
  });
  
};

exports.userLogin = function(req, res) {
  const data = {
    email:req.body.email,
    password:req.body.password
    };
  User.findOneAndUpdate({email:data.email,password:data.password}, data, function (err, place) {
    if(err) res.status(200).send({status:200,message:"Login apis err response",data:err});
    res.status(200).send({status:200,message:"Login apis response",data:place});
  });
  
};