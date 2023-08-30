const express = require("express");
const router = express.Router();
const catchAsyncErrors = require("./../app/middleware/catchAsyncErrors");
const {isSeller} = require ("../app/middleware/auth"); 


const orderController = require("../app/controller/orderController");


router.post("/create-order", catchAsyncErrors(orderController.createOrder));
router.get("/get-all-orders/:userId", catchAsyncErrors(orderController.getAllOrderByUSer));
router.get("/get-seller-all-orders/:shopId", catchAsyncErrors(orderController.getAllOrderByShop));
router.put("/update-order-status/:id",isSeller,catchAsyncErrors(orderController.updateOrderStatus));
router.put("/order-refund/:id",catchAsyncErrors(orderController.updateOrderRefund));
router.put("/order-refund-success/:id",isSeller,catchAsyncErrors(orderController.acceptRefund));



module.exports = router;