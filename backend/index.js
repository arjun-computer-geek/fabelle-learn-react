const express = require("express");
const dotenv = require('dotenv');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
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
app.use(cookieParser())
app.use(cors())
app.use('/public', express.static('public'))

// imporing routes
const products = require('./routes/product')
const users = require('./routes/user')
//Mounting the routes.
app.use('/api/',products);
app.use('/api/',users);

// listining to the server
const port = process.env.PORT
app.listen(port, () => console.log(`app is running on ${port} port`));