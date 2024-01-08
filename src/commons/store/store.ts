import { atom } from "recoil";

export const productState = atom({
  key: "productState",
  default: {},
});

export const addProductState = atom({
  key: "addProductState",
  default: {},
});
