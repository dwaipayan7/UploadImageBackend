const express = require('express')
const router = express.Router()
const Student = require('../models/student')
const multer = require('multer')

// upload.single('photo'),

router.post('/create', async(req, res) =>{
    try{
        const {name, age, email, phone, address} = req.body

        const newStudent = new Student({
            name,
            age,
            email,
            phone,
            address
        });

       const response = await newStudent.save()
        res.status(201).json({response : response, message: 'Student created successfully'})

    }catch(e){
        console.log(e);
        res.status(500).json({message: "Error while creating student"})
    }
});


module.exports = router