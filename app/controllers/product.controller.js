const {
  getList,
  create,
  getDetail,
  update,
  deleteById,
} = require("../services/product.services");
const getProductList = (req, res) => {
  const productList = getList();
  if (productList) {
    res.render("homepage.hbs", {
      productList: productList,
    });
  } else {
    res.status(404).send("Not Found");
  }
};

const createProduct = (req, res) => {
  let product = req.body;
  const newProduct = create(product);
  res.status(201).send(newProduct);
};

const getDetailProductById = (req, res) => {
  const params = req.params;
  const id = params.id;

  const product = getDetail(id);
  if (product) {
    res.status(200).send(product);
  } else {
    res.status(404).send("not found!");
  }
};

const updateProduct = (req, res) => {
  const params = req.params;
  const id = params.id;
  const product = req.body;

  const updatedProduct = update(id, product);
  if (updatedProduct) {
    res.status(200).send(updatedProduct);
  } else {
    res.status(404).send("Not Found!");
  }
};

const deleteProductById = (req, res) => {
  const { id } = req.params;
  const deletedProduct = deleteById(id);
  if (deletedProduct) {
    res.send(deletedProduct);
  } else {
    res.status(404).send("Not Found");
  }
};

module.exports = {
  getProductList,
  createProduct,
  getDetailProductById,
  updateProduct,
  deleteProductById,
};
