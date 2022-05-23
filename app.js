const express = require("express");
const app = express() 

app.use(require('./route/pokemon-rou'))

app.listen(3000, ()=>{
    console.log('server running at 3000')
})