const { getList, create } = require("../services/product.services");

const getProductList = (req, res) => {
  const productList = getList();
  if (productList) {
    res.status(200).send(productList);
  } else {
    res.status(404).send("Not Found");
  }
};

const createProduct = (req, res) => {
  let product = req.body;
  const newProduct = create(product);
  res.status(201).send(newProduct);
};

module.exports = {
  getProductList,
  createProduct,
};
