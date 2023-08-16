const express = require("express");
const router = express.Router();
const { upload } = require("./../multer");


const userController = require('../app/controller/userController');

router.get("/",upload.single("file"), userController.register);


module.exports= router;