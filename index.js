const express = require('express')
const port= 80
const app=express();

app.get('/',(req,res)=>{

    res.send("hello")
})

app.post('/postreq',(req,res)=>{

    console.log(req)
    res.send({
        msg:"how are you "
    })

})

app.listen(port,function(){
    console.log(`Example port : ${port}`)
})