const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Nhập tên sản phẩm "]
    },
    description:{
        type:String,
        required:[true,"Nhập thông tin sản phẩm"]
    },
    category:{
        type:String,
        required:[true,"Nhập thông tin category"]
    },
    tags:{
        type:String,
    },
    originalPrice:{
        type:Number,
    },
    discountPrice:{
        type:Number,
    },
    stock:{
        type:Number,
        default:0
    },
    images:[
        {
            type:String
        }
    ],
    shopId:{
        type:String,
        required:true
    },
    shop:{
        type:Object,
        required:true
    },
    sold_out:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})

module.exports= mongoose.model("Product",productSchema);