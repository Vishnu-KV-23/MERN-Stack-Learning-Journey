//import mongoose
var mongoose = require("mongoose");
//schema creation
var schema = mongoose.Schema({
  Name:String,
  Age:Number,
  Dept:String,
  Sal:Number
})
//model creation
var EmpAppModel = mongoose.model("employee",schema);
//exporting
module.exports=EmpAppModel;