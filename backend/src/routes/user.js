const express = require("express");
const router = express.Router();
const { upload } = require("./../multer");
const catchAsyncErrors = require("./../app/middleware/catchAsyncErrors");
const { isAuthenticated } = require("../app/middleware/auth");


const userController = require('../app/controller/userController');

router.post("/register",upload.single("file"), userController.register);
router.post("/active",catchAsyncErrors(userController.activation));
router.post("/login",catchAsyncErrors(userController.login));
router.get("/getUser",isAuthenticated,catchAsyncErrors(userController.getUser));
router.get("/logout",isAuthenticated,catchAsyncErrors(userController.logout));
router.put("/update-user-info",isAuthenticated,catchAsyncErrors(userController.updateUser));
router.put("/update-avatar",isAuthenticated,upload.single("image"),catchAsyncErrors(userController.updateAvatarUser));
router.put("/update-user-addresses",isAuthenticated,catchAsyncErrors(userController.updateAddressUser));
router.delete("/delete-user-address/:id",isAuthenticated,catchAsyncErrors(userController.deleteAddress));
router.put("/update-user-password",isAuthenticated,catchAsyncErrors(userController.updatePassword));
router.get("/user-info/:id",catchAsyncErrors(userController.getUserById));


module.exports= router;