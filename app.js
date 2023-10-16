require('dotenv').config()
const express  = require('express')
const connectDB = require('./db/connect')
const app = express()
const admin = require('./routes/adminRoutes')



//Server and connection 

const PORT = process.env.PORT || 3000 
const URI = process.env.URI

//Middlewares

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/users',admin)
//Basic route

app.get('/',(req,res)=>{
    res.send("Hello there welcome to the dashboard")
})

//Localhost set-up

const startConnection = async()=>{
    try {
        await connectDB(URI)
        app.listen(PORT,()=>{
            console.log(`Listerning on port http://localhost:${PORT}`)
        })
        
    } catch (error) {
        console.log(error)
    }
}
startConnection()