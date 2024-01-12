import { ITypeProductOption, ITypeSizeOption, ITypeIceOption } from "../../../commons/mock/Data.types";
import { Dispatch, SetStateAction } from "react";

export interface IPropsOptions {
  option: ITypeProductOption;
  options: ITypeProductOption | {};
  setOptions: Dispatch<SetStateAction<never[]>>;
}

export interface IPropsSizeOptions {
  sizeOption: ITypeSizeOption;
  selectedSize: ITypeSizeOption | {};
  setSelectedSize: Dispatch<SetStateAction<never[]>>;
}

export interface IPropsIceOptions {
  iceOption: ITypeIceOption;
  selectedIce: ITypeIceOption | {};
  setSelectedIce: Dispatch<SetStateAction<never[]>>;
}
