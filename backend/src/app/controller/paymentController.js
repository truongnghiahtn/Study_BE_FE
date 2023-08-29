const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

class PaymentController {
  // create payment
  async createPayment( req,res,next){
    const myPayment = await stripe.paymentIntents.create({
        amount: req.body.amount,
        currency: "inr",
        metadata: {
          company: "ShopppeNTD",
        },
      });
      res.status(200).json({
        success: true,
        client_secret: myPayment.client_secret,
      });
  }

  async get(req,res,next){
    res.status(200).json({ stripeApikey: process.env.STRIPE_API_KEY });
  }
}
module.exports = new PaymentController();
