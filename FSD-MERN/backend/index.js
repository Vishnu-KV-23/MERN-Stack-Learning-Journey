//npm init
//npm i express 
//1. importing express,by saying require
//doesnt have to give name as express
//1.start from assigning port to check its working
//2.create an api after that
var express=require("express");

//initialisation
var app=express();
// adding middlewares.... later


//adding api....writing the api
//app.get('url',(req,res)=>{})

app.get("/",(req,res)=>{
  res.send("Hello World")




})
app.get("/login",(req,res)=>{
  res.send("Hello Vishnu")
})


//port assigning
app.listen(3000,(req,res)=>{
  console.log("port is up and running")
})