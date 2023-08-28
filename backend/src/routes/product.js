const express = require("express");
const router = express.Router();
const { upload } = require("./../multer");
const catchAsyncErrors = require("./../app/middleware/catchAsyncErrors");
const { isSeller } = require("../app/middleware/auth");

const productController = require('../app/controller/productController');

router.post("/create-product",upload.array("images"), catchAsyncErrors(productController.create));
router.get("/get-all-products-shop/:id", catchAsyncErrors(productController.getAllById));
router.delete("/delete-shop-product/:id",isSeller, catchAsyncErrors(productController.deleteProduct));
router.get("/get-all-products", catchAsyncErrors(productController.getAllProduct));



module.exports= router;