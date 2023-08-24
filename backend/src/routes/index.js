const testRouter = require("./test");
const userRouter = require("./user");
const shopRouter = require ("./shop")


function route(app) {
  app.use("/test", testRouter);
  app.use("/api/user", userRouter);
  app.use("/api/shop",shopRouter)

}

module.exports = route;