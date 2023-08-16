const path = require("path");
const User = require("../models/user");
const ErrorHandler = require("../../util/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const sendMail = require("../../util/sendMail");
const sendToken = require("../../util/jwtToken");
// const { isAuthenticated } = require("../middleware/auth");

class UserController {
  async register(req, res, next) {
    try {
      const { name, email, password } = req.body;
      const userEmail = await User.findOne({ email });

      if (userEmail) {
        const filename = req.file.filename;
        const filePath = `uploads/${filename}`;
        fs.unlink(filePath, (err) => {
          if (err) {
            console.log(err);
            res.status(500).json({ message: "Error deleting file" });
          }
        });
        return next(new ErrorHandler("User already exists", 400));
      }

      const filename = req.file.filename;
      const fileUrl = path.join(filename);

      const user = {
        name: name,
        email: email,
        password: password,
        avatar: fileUrl,
      };

      const activationToken = createActivationToken(user);

      const activationUrl = `http://localhost:3000/activation/${activationToken}`;

      try {
        await sendMail({
          email: user.email,
          subject: "Activate your account",
          message: `Hello ${user.name}, please click on the link to activate your account: ${activationUrl}`,
        });
        res.status(201).json({
          success: true,
          message: `please check your email:- ${user.email} to activate your account!`,
        });
      } catch (error) {
        return next(new ErrorHandler(error.message, 500));
      }
    } catch (error) {
      return next(new ErrorHandler(error.message, 400));
    }
  }


  // active user
   async activation(req,res,next){
    try {
      const {token}= req.body;
      const newUser= jwt.verify(
        token,
        process.env.ACTIVATION_SECRET
      );
      if(!newUser){
        return next(new ErrorHandler("Invalid token",400));
      }
      const {name, email, password, avatar}=newUser;
      let user= await User.findOne({email});
      if(user){
        return next(new ErrorHandler("User already exitsts",400));
      }
      user = await User.create({
        name,
        email,
        password,
        avatar:{
          url:avatar
        }
      });
      sendToken(user,201,res);
    }
    catch(error){
      return next(new ErrorHandler(error.message,400))
    }
  }

}
// create activation token
const createActivationToken = (user) => {
  return jwt.sign(user, process.env.ACTIVATION_SECRET, {
    expiresIn: "5m",
  });
};

module.exports = new UserController();
