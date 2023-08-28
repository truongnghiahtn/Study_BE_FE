const express = require("express");
const router = express.Router();
const {upload} = require("./../multer");
const catchAsyncErrors = require("./../app/middleware/catchAsyncErrors");
const { isSeller } = require("../app/middleware/auth");


const eventController = require("../app/controller/eventController");


router.post("/create-event",upload.array("images"), catchAsyncErrors(eventController.create));
router.get("/get-all-events/:id", catchAsyncErrors(eventController.getAllById));
router.delete("/delete-shop-event/:id",isSeller, catchAsyncErrors(eventController.deleteEvent));
router.get("/get-all-events", catchAsyncErrors(eventController.getAllEvent));


module.exports = router;