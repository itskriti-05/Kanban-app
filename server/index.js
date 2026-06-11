const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config();

const app = express();      
app.use(cors());
app.use(express.json())

const authRoutes = require('./routes/auth')
app.use('/api/auth', authRoutes)

const boardRoutes = require('./routes/board')
app.use('/api/boards' , boardRoutes)

const dns = require("dns");
dns.setServers(["1.1.1.1", "8.8.8.8"]);

mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log('MongoDB connected!'))
    .catch((err)=>console.error('MongoDB error ', err));


app.get('/',(req,res) =>{
    res.json({message : 'kanban server is running '})

})

const PORT = process.env.PORT || 5000;

app.listen(PORT , ()=>{
    console.log(`server running on port ${PORT}`)
})

