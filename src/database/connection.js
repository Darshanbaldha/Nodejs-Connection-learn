// import mongoose module in mongoose variable.
const mongoose = require("mongoose");

mongoose.set('strictQuery', true);
// connection with databaes code.
mongoose.connect("mongodb://127.0.0.1:27017/firstlearn").then(() => {
    console.log("Connection with database is successfull.");
}).catch((e) => {
    console.log(e);
})