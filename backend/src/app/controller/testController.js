class TestController {
  //[GET] /course/:slug
  test(req, res, next) {
    res.json({ok:"test"})
  }
}
module.exports = new TestController();
