const mongoose = require('mongoose');

const connectDatabase = () => {
    mongoose.connect(process.env.ATLAS_DB_URI).then(con => {
        console.log('Databse Connected')
    })
}

module.exports = connectDatabase;