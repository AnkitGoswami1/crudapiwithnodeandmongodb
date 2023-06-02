const mongoose = require('mongoose');

//connection creation and creating a new db
mongoose.connect('mongodb://127.0.0.1:27017/users')
.then(()=> console.log("Connection Successful..."))
.catch((ex)=>console.log(err));

