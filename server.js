const express = require('express');
const app = express();
const dotenv = require("dotenv");
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require("path")

const connectDB = require("./server/database/conn");

dotenv.config({path : 'config.env'})
const PORT  = process.env.PORT || 8080;

//log request
app.use(morgan('tiny'));

//mongodb connection
connectDB();

//parser
app.use(bodyParser.urlencoded({extended:true}));

//set view path
app.set("view engine", "ejs");
//app.set("views",path.resolve(__dirname,"/"))

//load assets
app.use("/assets",express.static(path.resolve(__dirname,"assets")))
app.use("/css",express.static(path.resolve(__dirname,"assets/css")));
app.use("/js",express.static(path.resolve(__dirname,"assets/js")));
app.use("/img",express.static(path.resolve(__dirname,"assets/images")));

app.use('/',require('./server/route/router'))

app.listen(PORT,()=>{console.log(PORT)})