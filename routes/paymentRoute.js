const express = require("express")
const router = express.Router()
const {makePayment} = require("../controllers/paymentController")

router.post("/create-checkout-session", makePayment)

module.exports = router;