const testRouter = require("./test");
const userRouter = require("./user");
const shopRouter = require ("./shop");
const productRouter = require("./product");
const eventRouter = require("./event");
const coupounCodeRouter = require("./coupounCode")


function route(app) {
  app.use("/test", testRouter);
  app.use("/api/user", userRouter);
  app.use("/api/shop",shopRouter);
  app.use("/api/product",productRouter);
  app.use("/api/event",eventRouter);
  app.use("/api/coupon",coupounCodeRouter);


}

module.exports = route;