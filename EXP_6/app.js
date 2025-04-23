const express = require('express');
const path = require('path');
const app = express();

app.set("view engine","ejs");
// app.set("views",path.join(__dirname,"/views"));

//basic get req
app.get("/",(req,res)=>{
    res.render('index.ejs');
})

app.listen(8080,()=>{
    console.log(`Listening on port 8080`);
});
