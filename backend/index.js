const express = require("express");
const dotenv = require('dotenv');
const bodyParser = require('body-parser')
const cors = require('cors');
const connectDatabase = require("./config/databaseConnection");
const app = express();


//Setting up Config File
dotenv.config({path: './config/config.env'});

//Connecting To Database
connectDatabase();

//Using globle middlewares
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors())

// imporing routes
const products = require('./routes/product')

//Mounting the routes.
app.use('/api/',products);
// app.use('/api/',users);

// listining to the server
const port = process.env.PORT
app.listen(port, () => console.log(`app is running on ${port} port`));