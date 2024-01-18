import { ITypeCategories } from "../../../commons/mock/Data.types";
import { Dispatch, SetStateAction } from "react";

export interface IPropsMenu {
  isCate: string;
  setIsCate: Dispatch<SetStateAction<string>>;
}

export interface IPropsMenuUI {
  isCate: string;
  categories: ITypeCategories[];
  onClickMoveToCate: (cate: string) => () => void;
}
