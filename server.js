const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const app = express();
const morgan = require('morgan');//allows to log requests to console

const connectDB = require('./server/database/connection')

const bodyParser = require('body-parser');

dotenv.config({path: 'config.env'});
const PORT = process.env.PORT || 8080

//log requests
app.use(morgan('tiny'));

connectDB();

//parse req to body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}))

app.set("view engine" , "ejs");

//load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

//load routes
app.use('/', require('./server/routes/router'))

app.listen(3000, ()=>{
  console.log(`Server is running on port ${PORT}`);
})