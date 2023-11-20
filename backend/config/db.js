const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/Restaurant?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("connected to mongo successfully");
    });
}

module.exports = connectToMongo;