const express = require("express");
const router = express.Router();
const catchAsyncErrors = require("./../app/middleware/catchAsyncErrors");


const paymentController = require("../app/controller/paymentController");


router.post("/process", catchAsyncErrors(paymentController.createPayment));
router.get("/stripeapikey", catchAsyncErrors(paymentController.get));


module.exports = router;