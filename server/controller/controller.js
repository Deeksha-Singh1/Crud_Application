var UserDb = require('../model/model');

//create add new user

exports.create = (req,res)=>{
  //validate req

  if(!req.body){
    res.status(400).send({message:"Content cannot be empty"});
    return;
  }

  //new user
  const user = new UserDb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  })

  //save user in db
  user
  .save(user)
  .then(data=>{
    res.send(data)
  })
  .catch(err=>{
    res.status(500).send({
      message: err.message || "Some error occurred while creating a user"
    });
  });
} 

//retrive and return ll users

exports.find = (req,res)=>{

}

//update a user

exports.update = (req,res)=>{

}

//delete a user
exports.delete =(req,res)=>{

}