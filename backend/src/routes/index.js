const testRouter = require("./test");
const userRouter = require("./user");
const shopRouter = require ("./shop");
const productRouter = require("./product");
const eventRouter = require("./event");
const coupounCodeRouter = require("./coupounCode");
const paymentRouter = require("./payment");
const orderRouter = require ("./order");
const messageRouter = require ("./message");
const conversationRouter = require ("./conversation");


function route(app) {
  app.use("/test", testRouter);
  app.use("/api/user", userRouter);
  app.use("/api/shop",shopRouter);
  app.use("/api/product",productRouter);
  app.use("/api/event",eventRouter);
  app.use("/api/coupon",coupounCodeRouter);
  app.use("/api/payment",paymentRouter);
  app.use ("/api/order",orderRouter);
  app.use("/api/message",messageRouter);
  app.use ("/api/conversation",conversationRouter);

}

module.exports = route;