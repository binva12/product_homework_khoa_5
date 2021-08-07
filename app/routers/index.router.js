const express = require("express");
const productRouter = require("./product.router");
const router = express.Router();

// url <=> http://localhost:3000/students
router.use("/products", productRouter);

module.exports = router;
