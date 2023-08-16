const express = require("express");
const router = express.Router();
const { upload } = require("./../multer");
const catchAsyncErrors = require("./../app/middleware/catchAsyncErrors");


const userController = require('../app/controller/userController');

router.post("/register",upload.single("file"), userController.register);
router.post("/active",catchAsyncErrors(userController.activation))


module.exports= router;