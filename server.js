const express = require('express');
const dotenv = require('dotenv');
const app = express();
const morgan = require('morgan');//allows to log requests to console

dotenv.config({path: 'config.env'});
const PORT = process.env.PORT || 8080

//log requests
app.use(morgan('tiny'));

app.get('/', (req,res)=>{
  res.send("Crud Application");
})

app.listen(3000, ()=>{
  console.log(`Server is running on port ${PORT}`);
})