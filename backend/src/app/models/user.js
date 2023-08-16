const mongoose = require("mongoose");
const bcrypt = require("bcryptjs"); //  hash code password
const jwt = require("jsonwebtoken"); // token of user


//
const JWT_SECRET_KEY = "2FxXT1NTf2K1Mo4i6AOvtdI";
const JWT_EXPIRES = "7d"

const { Schema } = mongoose;

const userSchema = new Schema({
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
  phoneNumber: {
    type: Number,
  },
  address: [
    {
      country: {
        type: String,
      },
      city: {
        type: String,
      },
      address: {
        type: String,
      },
    },
  ],
  role: {
    type: String,
    default: "user",
  },
  avatar: {
    puplic_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  resetPasswordToken: String,
  resetPasswordTime: Date,
});

// hash password

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// compare password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// jwt token
userSchema.methods.getJwtToken = function () {
  return jwt.sign({ id: this._id }, JWT_SECRET_KEY, {
    expiresIn: JWT_EXPIRES,
  });
};
