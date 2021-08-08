let productList = [
  {
    id: 1,
    name: "điện thoại",
    amount: 18,
    price: 7000,
    sale: true,
  },
  {
    id: 2,
    name: "tivi",
    amount: 17,
    price: 7000,
    sale: true,
  },
  {
    id: 3,
    name: "laptop",
    amount: 15,
    price: 20000,
    sale: false,
  },
];

const getList = () => {
  if (productList) {
    return productList;
  } else {
    return false;
  }
};

const create = (product) => {
  const newProduct = {
    id: Math.random(),
    ...product,
  };
  productList = [...productList, newProduct];
  return newProduct;
};

const getDetail = (id) => {
  const index = productList.findIndex((product) => {
    return product.id == id;
  });
  if (index !== -1) {
    const product = productList[index];
    return product;
  } else {
    false;
  }
};

const update = (id, product) => {
  const index = productList.findIndex((product) => product.id == id);
  if (index !== -1) {
    const oldProduct = productList[index];
    const updatedProduct = { ...oldProduct, ...product };
    productList[index] = updatedProduct;

    return updatedProduct;
  } else {
    return false;
  }
};

const deleteById = (id) => {
  const index = productList.findIndex((product) => product.id == id);
  if (index !== -1) {
    const product = productList[index];
    productList.splice(index, 1);
    return product;
  } else {
    false;
  }
};

module.exports = {
  getList,
  create,
  getDetail,
  update,
  deleteById,
};
