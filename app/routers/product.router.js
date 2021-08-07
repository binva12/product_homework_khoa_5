const express = require("express");
const productRouter = express.Router();
const {
  getProductList,
  createProduct,
} = require("../controllers/product.controller");

productRouter.get("/", getProductList);
productRouter.post("/", createProduct);

module.exports = productRouter;
