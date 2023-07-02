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
  UserDb.find()
  .then(user =>{
    res.send(user)
  })
  .catch(err =>{
    res.status(500).send({message:err.message || "Error Occurred while retrieving user information"})
  })
}

//update a user

exports.update = (req,res)=>{
  if(!req.body){
    res.status(400).send({message:"Content cannot be empty"});
    return;
  }

  const id = req.params.id;
  UserDb.findByIdAndUpdate(id, req.body, {userFindAndModify:false})
  .then(data=>{
    if(!data){
      res.status(404).send({message: `Cannot Update user with ${id}`})
    }else{
      res.send(data);
    }
  })
  .catch(err=>{
    res.send(500).send({message:"Error Update user information"})
  })
}

//delete a user
exports.delete =(req,res)=>{
  const id = req.params.id;
  UserDb.findByIdAndDelete(id)
  .then(data=>{
    if(!data){
      res.status(404).send({message:`Cannot  Delete with id ${id}. May id is wrong`})
    }else{
      res.send({message:"User deleted successfully"})
    }
  })
  .catch(err =>{
    res.status(505).send({message:`Could not delete User with id ${id}`})
  })
}