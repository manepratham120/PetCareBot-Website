const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const userModel=require('./models/user')
const PORT=8000

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/user");

app.get('/',(req,res)=>{
  res.send("server is running ")
})

app.post('/register',(req,res)=>{
  userModel.create(req.body)
  .then(user=>res.json(user))
  .catch(err=>res.json(err))

})

app.post('/login',(req,res)=>{
  const {username, password}=req.body;
  userModel.findOne({username:username})
  .then(user=>{
    if(user){
      if(user.password===password){
        res.json("Success")
      }
      else{
        res.json("the password is incorrect")
      }
    }else{
      res.json("No record existed");
    }
  })
})


app.listen(PORT,()=>{
  console.log(`server is running on http://localhost:${PORT}`) 
});

