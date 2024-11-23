const { config } = require('dotenv');
const express = require('express');
const app = express();
config()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded( { extended: true } ));





app.listen(3000, (req, res) =>{
    console.log('Server is running on port 3000')
})