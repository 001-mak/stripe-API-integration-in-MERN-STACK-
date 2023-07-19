const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)


const makePayment =  async (req, res) =>{
    
    try {
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ["card"],
          mode: "payment",
          line_items: req.body.items.map(item => {
           
            return {
              price_data: {
                currency: "usd",
                product_data: {
                  name: item.name,
                },
                unit_amount: item.price*100,
              },
              quantity: item.quantity,
            }
          }),
          success_url: `${process.env.CLIENT_URL}`,
          cancel_url: `${process.env.CLIENT_URL}`,
        })
        res.json({ url: session.url })
      } catch (e) {
        res.status(500).json({ error: e.message })
      }
}

module.exports = {makePayment}