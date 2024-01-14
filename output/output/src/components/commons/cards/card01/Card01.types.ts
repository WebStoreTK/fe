import { ITypeProducts } from "../../../../commons/mock/Data.types";

export interface IPropsCard01 {
  product: ITypeProducts;
  onClickOpenModal: (product: ITypeProducts) => () => void;
}
