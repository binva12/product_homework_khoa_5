const express = require("express");

const productRouter = express.Router();

const {
  getProductList,
  createProduct,
  getDetailProductById,
  updateProduct,
  deleteProductById,
} = require("../controllers/product.controller");
productRouter.get("/", getProductList);
productRouter.post("/", createProduct);
productRouter.get("/:id", getDetailProductById);
productRouter.put("/:id", updateProduct);
productRouter.delete("/:id", deleteProductById);

module.exports = productRouter;
