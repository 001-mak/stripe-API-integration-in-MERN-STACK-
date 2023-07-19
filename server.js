const express = require("express")
const app = express()
const dotenv = require("dotenv").config();
const router = require("./routes/paymentRoute")
const cors = require("cors")

app.use(express.json());
app.use(
    cors({
      origin: "http://localhost:3001",
    })
  )

app.get("/", (req,res)=>{
    res.send("server is running at port 3000")
})
app.use("/api", router)
app.listen(3000)
console.log("server running at port 3000")