const express = require("express");
const router = express.Router();
const { upload } = require("./../multer");
const catchAsyncErrors = require("./../app/middleware/catchAsyncErrors");
const { isAuthenticated,isSeller } = require("../app/middleware/auth");


const shopController = require('../app/controller/shopController');

router.post("/register",upload.single("file"), shopController.register);
router.post("/active",catchAsyncErrors(shopController.activation));
router.post("/login",catchAsyncErrors(shopController.login));
router.get("/getSeller",isSeller,catchAsyncErrors(shopController.getUser));
router.get("/get-shop-info/:id",catchAsyncErrors(shopController.getInfoShop));
router.get("/logout",isSeller,catchAsyncErrors(shopController.logout));
router.put("/update-shop-avatar",isSeller,upload.single("image"),catchAsyncErrors(shopController.updateAvatar));
router.put("/update-seller-info",isSeller,catchAsyncErrors(shopController.updateInFo));


module.exports= router;