const express = require("express");
const router = express.Router();
const { upload } = require("../multer");
const catchAsyncErrors = require("../app/middleware/catchAsyncErrors");
const { isAuthenticated,isSeller } = require("../app/middleware/auth");


const conversationController = require('../app/controller/conversationController');

router.post("/create-new-conversation", catchAsyncErrors(conversationController.createConversation));
router.get("/get-all-conversation-seller/:id",isSeller,catchAsyncErrors(conversationController.getBySeller));
router.get("/get-all-conversation-user/:id",isAuthenticated,catchAsyncErrors(conversationController.getByUser));
router.put("/update-last-message/:id", catchAsyncErrors(conversationController.updateLastMess));


module.exports= router;