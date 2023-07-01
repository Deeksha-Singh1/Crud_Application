const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const app = express();
const morgan = require('morgan');//allows to log requests to console

const bodyParser = require('body-parser');

dotenv.config({path: 'config.env'});
const PORT = process.env.PORT || 8080

//log requests
app.use(morgan('tiny'));

//parse req to body parser
app.use(bodyParser.urlencoded({extended : true}))

app.set("view engine" , "ejs");

//load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))


app.get('/', (req,res)=>{
  res.render('index')
})

app.get('/add-user', (req,res)=>{
  res.render('add_user')
})

app.get('/update-user', (req,res)=>{
  res.render('update_user')
})

app.listen(3000, ()=>{
  console.log(`Server is running on port ${PORT}`);
})