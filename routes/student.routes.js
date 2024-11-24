const express = require('express')
const router = express.Router()
const Student = require('../models/student')
const multer = require('multer')

// upload.single('photo'),

//Using Local Storage
/*
const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const suffix = Date.now();
        cb(null, suffix + '_' + file.originalname);
    }
});
*/

const storage = multer.memoryStorage();

const upload = multer({storage});


router.post('/create',upload.single('photo'), async(req, res) =>{
    try{
        const {name, age, email, phone, address} = req.body

       // const photoPath = req.file ? req.file.path : null

       const photoBase64 = req.file ? req.file.buffer.toString('base64') : null;

        const newStudent = new Student({
            name,
            age,
            email,
            phone,
            address,
            photo: photoBase64   //photoPath
        });

       const response = await newStudent.save()
        res.status(201).json({response : response, message: 'Student created successfully'})

    }catch(e){
        console.log(e);
        res.status(500).json({message: "Error while creating student"})
    }
});


module.exports = router