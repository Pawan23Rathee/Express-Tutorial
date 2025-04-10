const mongoose=require("mongoose")

 const UserSchema = new mongoose.Schema({
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    avatar:{type: String},
    role:{type:String,enum:["user","admin"],default:"user"}, 
    resetToken:{type:String},
    resetTokenExpiry: {type:Date},
 });
 module.exports = mongoose.model("User",UserSchema);