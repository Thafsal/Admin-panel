const mongoose = require('mongoose')

const connectDB = (url) =>{
    return mongoose.connect(url,{
        useUnifiedTopology: true
    }).then(()=>{
        console.log("Connected to db.........")
    }).catch((error)=>{
        console.log(`Ooops something wrong with your connection in DB ${error}`)
    })
}

module.exports = connectDB