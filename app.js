const express  = require('express')
const app = express()



//Server and connection 

const PORT = process.env.PORT || 3000 
const URI = process.env.URI

//Basic route

app.get('/',(req,res)=>{
    res.send("Hello there welcome to the dashboard")
})

//Localhost set-up

app.listen(PORT,()=>{
    console.log(`Listerning on port http://localhost:${PORT}`)
})