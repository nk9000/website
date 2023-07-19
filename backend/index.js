const mongoose = require("mongoose")
const express = require('express')
const cors = require('cors')
const authController = require("./controllers/authController")
const dotenv = require('dotenv').config()
const app = express()


// Connect to our database
const connectToMongo = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URL)
      console.log("Connected to MongoDB successfully")
    } catch (error) {
      console.error("Failed to connect to MongoDB:", error)
    }
  }
  
  connectToMongo()





// routes and middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/auth' , authController)

































// Start our server
app.listen(process.env.PORT, () => console.log('Server has been started successfully'))
