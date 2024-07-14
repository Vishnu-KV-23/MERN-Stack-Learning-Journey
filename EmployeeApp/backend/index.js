var express= require("express");
require('./connection');
var cors=require('cors');
var EmpAppModel=require("./model/employee");
// const EmpAppModel = require("./model/employee");
var app =express()
// middleware
app.use(express.json())
app.use(cors())
// api
// add employee
app.post("/add",async(req,res)=>{
    try {
        await EmpAppModel(req.body).save()
        res.send({message:"data added"});
    } catch (error) {
        console.log(error)
    }
})
// api to view data
app.get("/view",async(req,res)=>{
    try {
        var output= await EmpAppModel.find()
        res.send(output);
        
    } catch (error) {
        console.log("error");
    }
});
// api to delete data
app.delete("/remove/:a",async(req,res)=>{
    console.log(req.params.a);
    try {
        var id=req.params.a
        await EmpAppModel.findByIdAndDelete(id)
            res.send({message:"data deleted"});
    } catch (error) {
        console.log("error");
        
    }
});
// api to update
app.put("/update/:a",async(req,res)=>{
    console.log(req.params.a);
    try {
        var a =req.params.a
        var out=await EmpAppModel.findByIdAndUpdate(a,req.body)
        res.send({message:"data updated",out});
        
    } catch (error) {
        console.log("error");
    }
});
// port
app.listen('3700',()=>{console.log("port is up amd running ")});