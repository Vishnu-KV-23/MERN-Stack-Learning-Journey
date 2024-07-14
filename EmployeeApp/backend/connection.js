//import mongooose
var mongoose=require("mongoose")
//connect with db
mongoose.connect("mongodb+srv://vishnu:vishnu@cluster0.hj3xm0s.mongodb.net/Empl?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
  console.log("connected to db")
})
.catch((err)=>{
  console.log(err)
})