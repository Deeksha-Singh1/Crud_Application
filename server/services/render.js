const axios = require("axios");

exports.homeRoutes = (req,res)=>{
  axios.get("http://localhost:3000/api/users")
  .then(response=>{
    res.render('index',{users:response.data});
  })
  .catch(err=>{
    res.send(err);
  })
}

exports.addUser = (req,res)=>{
  res.render('add_user')
}

exports.updateUser = (req,res)=>{
  res.render('update_user')
}