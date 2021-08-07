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

module.exports = {
  getList,
  create,
};
