// import thu vien
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const cloudinary = require("cloudinary");

const ErrorHandler = require("./app/middleware/error");
const route = require("./routes");
const db= require("./db/database");

const app = express();
const PORT = 8000;


// connect db
db.connect();

//
app.use(cors({
  origin: ['https://eshop-tutorial-pyri.vercel.app',],
  credentials: true
}));

//
cloudinary.config({
  cloud_name: "",
  api_key: "",
  api_secret: ""
})

// config file static
app.use(express.static(path.join(__dirname, "public")));
app.use("/", express.static("uploads"));

// config dotenv
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "./config/.env",
  });
}


// parser DATA
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json());

// set cookie
app.use(cookieParser());

// custom method
app.use(methodOverride("_method"));

// HTTP logger
app.use(morgan("combined"));

// contoller
route(app);

// use middleware err
app.use(ErrorHandler);

app.listen(PORT, () => {
  // console.log(process.env.NODE_ENV);
  // console.log(process.env.PORT);
  console.log(`App listening at http://localhost:${PORT}`);
});
