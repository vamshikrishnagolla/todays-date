const express = require("express")
const app = express()

app.get("/",(request,response)=>{
    const todaydate = new Date();
    response.send(`${todaydate.getDate()}-${todaydate.getMonth() +1}-${todaydate.getFullYear()}`)
})

module.exports=app;