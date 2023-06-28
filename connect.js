// importing required library
const mongoose = require('mongoose')

// arrow function to connect to mongoDB
const handleConnectToMongoDB = async (URI) => {
    await mongoose.connect(URI)
}

// exporting handleConnectToMongoDB().
module.exports = handleConnectToMongoDB;