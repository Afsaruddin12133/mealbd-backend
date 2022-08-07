const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// Home route!!
app.get('/',(req,res)=>{
    res.send("Hello express!!");
})
// Listen route!!
app.listen(port,(req,res)=>{
    console.log(`Listening port is ${port}`);
})


