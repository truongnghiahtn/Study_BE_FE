const express = require("express");
const router = express.Router();
const { upload } = require("../multer");
const catchAsyncErrors = require("../app/middleware/catchAsyncErrors");
const { isAuthenticated,isSeller } = require("../app/middleware/auth");


const messageController = require('../app/controller/messageController');

router.get("/get-all-messages/:id", messageController.getAllMessage);
router.post("/create-new-message",upload.array("images"),catchAsyncErrors(messageController.createMessage));


module.exports= router;