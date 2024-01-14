import { atom } from "recoil";
import {ITypeProducts} from "../mock/Data.types";

export const productState = atom({
  key: "productState",
  default: {
    categoryId: "",
    name: "",
    price: 0,
    sizeOption: [],
    option: [],
  } as ITypeProducts,
});

export const addProductState = atom<ITypeProducts[]>({
  key: "addProductState",
  default: [],
});
