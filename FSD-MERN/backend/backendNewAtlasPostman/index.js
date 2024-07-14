//importing express
var express=require("express")
require('./connection');
var sampleModel = require('./model');
//initialization
var app=express();
//adding middlewares
app.use(express.json());

//api
//to add data to db
app.post('/add',async(req,res)=>{
  try{
    await sampleModel(req.body).save()
    res.send({message:"data added"})
  }
  catch(err)
  {
    console.log(err)
  }
});
//api to view data
app.get('/view',async(req,res)=>{
  try {
    
    var output=await sampleModel.find();
    res.send(output);
  } catch (error) {
    
console.log(err)
  }
})
//api to delete document
app.delete('/remove/:id',async(req,res)=>{
    console.log(req.params.id)
    try {
      var id = req.params.id
      await sampleModel.findByIdAndDelete(id)
      res.send("data deleted")
    } catch (err) {
      console.log(err)
    }
  })
// api to update a document
app.put('/edit/:id',async(req,res)=>{
  console.log(req.params.id)
  try {
    var id=req.params.id
    var output=await sampleModel.findByIdAndUpdate(id,req.body)
    res.send({message:"updated:",output})
  } catch (err) {
    console.log(err)
  }
})
//port
app.listen(38,(req,res)=>{
  console.log("port is up and running")
})