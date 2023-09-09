// import mongoose module in mongoose variable.
const mongoose = require("mongoose");

// connection with databaes code.
mongoose.connect("mongodb://localhost:27017/firstlearn",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(() => {
    console.log("Connection with database is successfull.");
}).catch((e) => {
    console.log(e);
})