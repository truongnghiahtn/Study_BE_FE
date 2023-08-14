const express = require("express");
const router= express.Router();


const testController = require('../app/controller/testController');

router.get("/", testController.test);


module.exports= router;