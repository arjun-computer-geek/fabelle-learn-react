const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.DB_URI).then(con => {
        console.log('Databse Connected')
    })
    console.log("working")
}

module.exports = connectDatabase;