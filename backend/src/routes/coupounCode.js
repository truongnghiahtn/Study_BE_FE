const express = require("express");
const router = express.Router();
const catchAsyncErrors = require("../app/middleware/catchAsyncErrors");
const { isSeller } = require("../app/middleware/auth");

const coupounCodeController = require('../app/controller/coupounCodeController');

router.post("/create-coupon-code",isSeller, catchAsyncErrors(coupounCodeController.create));
router.get("/get-coupon/:id",isSeller, catchAsyncErrors(coupounCodeController.getById));
router.delete("/delete-coupon/:id",isSeller, catchAsyncErrors(coupounCodeController.delete));



module.exports= router;