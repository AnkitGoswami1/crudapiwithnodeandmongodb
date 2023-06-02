const express=require("express");
const route=express.Router();
const MensRanking=require("../models/user")

// Create User data
route.post("/users", async (req,res)=>{
    try {
        const userdata=new MensRanking(req.body);
        console.log(userdata);
        const insertUsers=await userdata.save();
        res.status(201).send(insertUsers);   
    }
     catch (error)
     {
       res.status(400).send(error);
    }
})

//Get all Users data

route.get("/users", async (req,res)=>{
   try {
       const getUsers=await MensRanking.find({}).sort({"ranking":1});
       res.status(200).send(getUsers);   
   }
    catch (error)
    {
      res.status(400).send(error);
   }
})

//Get user by id
route.get("/users/:id", async (req,res)=>{
   try {
       const _id=req.params.id
       const getUsers=await MensRanking.find({_id});
       res.status(200).send(getUsers);   
   }
    catch (error)
    {
      res.status(404).send(error);
   }
})

//update data of one users by their id using patch api

route.patch("/users/:id", async (req,res)=>{
   try {
       const _id=req.params.id
       const getUsers=await MensRanking.findByIdAndUpdate(_id,req.body,{
           new:true
       });
       res.send(getUsers);   
   }
    catch (error)
    {
      res.status(500).send(error);
   }
})

//Delete users data by their id


route.delete("/users/:id", async (req,res)=>{
   try {
       const _id=req.params.id
       const getUsers=await MensRanking.findByIdAndDelete(_id,req.body,{
           new:true
       });
       res.send(getUsers);   
   }
    catch (error)
    {
      res.status(404).send(error);
   }
})

module.exports=route;