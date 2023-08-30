const path = require("path");
const Shop = require("../models/shop");
const ErrorHandler = require("../../util/ErrorHandler");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const sendMail = require("../../util/sendMail");
const sendShopToken = require("../../util/shopToken");

class ShopController {
  // register seller
  async register(req, res, next) {
    try {
      const { name, email, password, zipCode, phoneNumber, address } = req.body;
      const userEmail = await Shop.findOne({ email });

      if (userEmail) {
        const filename = req.file.filename;
        const filePath = `uploads/${filename}`;
        fs.unlink(filePath, (err) => {
          if (err) {
            console.log(err);
            res.status(500).json({ message: "Error deleting file" });
          }
        });
        return next(new ErrorHandler("Seller already exists", 400));
      }

      const filename = req.file.filename;
      const fileUrl = path.join(filename);

      const seller = {
        name: name,
        email: email,
        password: password,
        avatar: fileUrl,
        zipCode: zipCode,
        phoneNumber: phoneNumber,
        address: address,
      };

      const activationToken = createActivationToken(seller);

      const activationUrl = `http://localhost:3000/seller/activation/${activationToken}`;

      try {
        await sendMail({
          email: seller.email,
          subject: "Activate your account",
          message: `Hello ${seller.name}, please click on the link to activate your account: ${activationUrl}`,
        });
        res.status(201).json({
          success: true,
          message: `please check your email:- ${seller.email} to activate your account!`,
        });
      } catch (error) {
        return next(new ErrorHandler(error.message, 500));
      }
    } catch (error) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
  // activation seller
  async activation(req, res, next) {
    try {
      const { token } = req.body;
      const newSeller = jwt.verify(token, process.env.ACTIVATION_SECRET);
      if (!newSeller) {
        return next(new ErrorHandler("Invalid token", 400));
      }
      const { name, email, password, avatar, zipCode, phoneNumber, address } =
        newSeller;
      let seller = await Shop.findOne({ email });
      if (seller) {
        return next(new ErrorHandler("User already exitsts", 400));
      }
      seller = await Shop.create({
        name,
        email,
        password,
        avatar: avatar,
        zipCode,
        phoneNumber,
        address,
      });
      sendShopToken(seller, 201, res);
    } catch (error) {
      return next(new ErrorHandler(error.message, 400));
    }
  }

  // login
  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return next(new ErrorHandler("Please provide the all fields!", 400));
      }
      let seller = await Shop.findOne({ email }).select("+password");
      if (!seller) {
        return next(new ErrorHandler("tài khoản không tồn tại", 400));
      }
      const isPassword = await seller.comparePassword(password);
      if (!isPassword) {
        return next(new ErrorHandler("mật khẩu không đúng", 400));
      }
      sendShopToken(seller, 201, res);
    } catch (error) {
      return next(new ErrorHandler(error.message, 400));
    }
  }

  async getUser(req, res, next) {
    try {
      const seller = await Shop.findById(req.seller._id);
      if (!seller) {
        return next(new ErrorHandler("Seller doesn't exists", 400));
      }
      res.status(200).json({
        success: true,
        seller,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 400));
    }
  }
  // logout
  async logout(req, res, next) {
    try {
      res.cookie("seller_token", "null", {
        expires: new Date(Date.now()),
        httpOnly: true,
      });

      res.status(201).json({
        success: true,
        message: "Bạn đã log out thành công",
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  }

  // get infoshop
  async getInfoShop(req, res, next) {
    try {
      const shop = await Shop.findById(req.params.id);
      if (!shop) {
        return next(new ErrorHandler("Không tồn tại shop này ", 400));
      }
      res.status(201).json({
        success: true,
        shop,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  }

  async updateAvatar(req, res, next) {
    try {
      const existsUser = await Shop.findById(req.seller._id);

      const existAvatarPath = `uploads/${existsUser.avatar}`;

      fs.unlinkSync(existAvatarPath);

      const fileUrl = path.join(req.file.filename);

      const seller = await Shop.findByIdAndUpdate(req.seller._id, {
        avatar: fileUrl,
      });

      res.status(200).json({
        success: true,
        seller,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  }

  async updateInFo(req, res, next) {
    try {
      const { name, description, address, phoneNumber, zipCode } = req.body;

      const shop = await Shop.findOne(req.seller._id);

      if (!shop) {
        return next(new ErrorHandler("User not found", 400));
      }

      shop.name = name;
      shop.description = description;
      shop.address = address;
      shop.phoneNumber = phoneNumber;
      shop.zipCode = zipCode;

      await shop.save();

      res.status(201).json({
        success: true,
        shop,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }
  }
}

const createActivationToken = (seller) => {
  return jwt.sign(seller, process.env.ACTIVATION_SECRET, {
    expiresIn: "5m",
  });
};

module.exports = new ShopController();
