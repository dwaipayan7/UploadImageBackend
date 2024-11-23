const { config } = require('dotenv');
const express = require('express');
const app = express();
config()
const bodyParser = require('body-parser')
const connectDB = require('./config/db')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded( { extended: true } ));

connectDB();

const PORT = process.env.PORT || 4000;
const studentRoutes = require('./routes/student.routes')

app.use('/student', studentRoutes);


app.listen(PORT, () =>{
    console.log('Server is running on port 3000')
})