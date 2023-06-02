const express= require("express");
const db=require("./db/conn")
const MensRanking=require("./models/user");
const app=express();
const route=require("./routers/routes")
const port=process.env.port || 3000;

app.use(express.json());
app.use(route);

app.get("/",async(req,res)=>
{
    res.send("hey! i am there");
})


app.listen(port,()=>
{
    console.log(`Server is running on port ${port}`);
})