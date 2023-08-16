const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1/shoppe");
    console.log("Kết nối server thành công ");
  } catch {
    console.log("kết nối thất bại");
  }
}

module.exports = {connect}