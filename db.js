const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://anupam04:Qwerty1234@cluster0.12z1s.mongodb.net/")
const User=mongoose.model("Users",{name: String, email:String});

let user1= new User({name:"anupam" ,email:'anupamchand16@gmail.com'});
user1.save().then(()=>{console.log("successful")})