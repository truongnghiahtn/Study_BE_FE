const Product = require("../models/product");
const Shop = require("../models/shop");
const ErrorHandler = require("../../util/ErrorHandler");
const fs = require("fs");

class ProductController {
  // create-product
  async create(req, res, next) {
    try {
      const shopId = req.body.shopId;
      const shop = await Shop.findById(shopId);
      if (shop) {
        const files = req.files;
        const imageUrls = files.map((file) => `${file.filename}`);

        const productData = req.body;
        productData.images = imageUrls;
        productData.shop = shop;

        const product = await Product.create(productData);

        res.status(201).json({
          success: true,
          product,
        });
      } else {
        return next(new ErrorHandler("Shop Id is invalid!", 400));
      }
    } catch (error) {
      return next(new ErrorHandler(error.message, 400));
    }
  }

  // getAllProduct
  async getAllById(req, res, next) {
    try {
      const productAll = await Product.find({ shopId: req.params.id });
      res.status(201).json({
        success: true,
        productAll,
      });
    } catch (error) {
      return next(new ErrorHandler(error.message, 400));
    }
  }

  // Delete Product

  async deleteProduct(req, res, next) {
    try {
      const productId = req.params.id;
      const productData = await Product.findById(productId);
      productData.images.forEach((imageUrl) => {
        const filename = imageUrl;
        const filePath = `uploads/${filename}`;
        fs.unlink(filePath, (err) => {
          if (err) {
            console.log(err);
          }
        });
      });
      const product = await Product.findByIdAndDelete(productId);
      if (!product) {
        return next(new ErrorHandler("Product not found with this id!", 500));
      }
      res.status(201).json({
        success: true,
        message: "Product Deleted successfully!",
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  }

  async getAllProduct(req,res,next){
    try {
        const products = await Product.find();
        res.status(201).json({
          success: true,
          products,
        });
      } catch (error) {
        return next(new ErrorHandler(error, 400));
      }
  }
}

module.exports = new ProductController();
