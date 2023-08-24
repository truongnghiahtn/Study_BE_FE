const mongoose = require("mongoose");
const bcrypt = require("bcryptjs"); //  hash code password
const jwt = require("jsonwebtoken"); // token of user


const { Schema } = mongoose;

const shopSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
  },
  password: {
    type: String,
    required: [true, "Plsese enter your password"],
    minlength: [4, "password should be greater than 4 characters"],
    select: false,
  },
  description:{
    type:String
  },
  phoneNumber: {
    type: Number,
    required:true
  },
  address:{
    type:String,
    required: true
  },
  role: {
    type: String,
    default: "seller",
  },
  avatar: {
    type:String,
    required:true
  },
  zipCode:{
    type:String,
    required:true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  resetPasswordToken: String,
  resetPasswordTime: Date,
});

// hash password

shopSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// compare password
shopSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// jwt token
shopSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

module.exports = mongoose.model("Shop", shopSchema);