const mongoose = require("mongoose");
dbConnect()
async function dbConnect(){

     try {
         await mongoose.connect("mongodb+srv://nasa:nasa@graphqlnode.z5vfw.mongodb.net/Jucjobs?retryWrites=true&w=majority" , {useNewUrlParser : true});
         console.log('Mongo DB Connection success')
     } catch (error) {
         console.log('Mongo DB Connection failed')
     }

}

module.exports = mongoose
