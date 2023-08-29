const express = require("express");
const router = express.Router();
const catchAsyncErrors = require("./../app/middleware/catchAsyncErrors");


const orderController = require("../app/controller/orderController");


router.post("/create-order", catchAsyncErrors(orderController.createOrder));
router.get("/get-all-orders/:userId", catchAsyncErrors(orderController.getAllOrderByUSer));
router.get("/get-seller-all-orders/:shopId", catchAsyncErrors(orderController.getAllOrderByShop));


module.exports = router;