const express = require("express");
const router = express.Router();
const { upload } = require("./../multer");
const catchAsyncErrors = require("./../app/middleware/catchAsyncErrors");
const { isAuthenticated } = require("../app/middleware/auth");


const userController = require('../app/controller/userController');

router.post("/register",upload.single("file"), userController.register);
router.post("/active",catchAsyncErrors(userController.activation));
router.post("/login",catchAsyncErrors(userController.login));
router.post("/getUser",isAuthenticated,catchAsyncErrors(userController.login));


module.exports= router;