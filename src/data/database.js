require('dotenv').config()

const mongoose = require('mongoose')

//const varAmbiente =  process.env.MONGO_URL_PROD

const connect = async () =>{
   try {
    await  mongoose.connect(process.env.MONGO_URL_PROD, {

        useNewUrlParser: true,
        useUnifiedTopology: true
        

    })

    console.log("conectado")
       
   } catch (error) {

    console.log(error.message)
       
   }
    
    
}



module.exports = { connect }
