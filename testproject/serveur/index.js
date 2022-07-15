
import express from 'express';
import mongoose from 'mongoose';
import Accounts from './models/userShemer.js';
import cors  from'cors';
const app =express();



app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://admin:hfGefNO0KUEhYnvN@cluster0.pjcgo.mongodb.net/Accounts?retryWrites=true&w=majority",{
  useNewUrlParser:true,
});

app.post('/insert',async(req,res)=>{
  const accountName =req.body.nameCreation;
  const pass = req.body.passwordCreation;
  const mail = req.body.emailCreation;
  const account = new Accounts({
    name:accountName,password:pass,email:mail

  });
  try{
    await account.save();
    res.send("inserted data")
    }
    catch(err){
      console.log(err);
    }
  }
)


app.listen(3001,()=>console.log("Server running on port 3001..."));