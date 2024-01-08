import categoriesData from "./data/categories";
import productsData from "./data/products";
import couponsData from "./data/coupons";

const responses = [
  {
    uri: "/categories",
    handleResponse: categoriesData.handleResponse,
  },
  {
    uri: "/products",
    handleResponse: productsData.handleResponse,
  },
  {
    uri: "/coupons",
    handleResponse: couponsData.handleResponse,
  },
];

export default responses;
