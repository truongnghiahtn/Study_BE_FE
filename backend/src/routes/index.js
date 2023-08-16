const testRouter = require("./test");
const userRouter = require("./user");

function route(app) {
  app.use("/test", testRouter);
  app.use("/user", userRouter);

}

module.exports = route;