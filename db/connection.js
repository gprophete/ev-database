const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_URI || "mongodb://localhost/ev-database";



mongoose.connect(connectionString)
    .then(() => {
        console.log("connected to mongo")
    })
    .catch((error) => {
        console.log("Failed to connect to mongo")

    });



module.exports = mongoose