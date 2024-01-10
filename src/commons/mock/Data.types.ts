export interface ITypeCategories {
  id: string;
  name: string;
}
// export interface ITypeCoupons {
//   id: string;
//   type: string;
//   name: string;
//   price: number;
// }
export interface ITypeProducts {
  categoryId: string;
  name: string;
  price: number;
  sizeOption?: ITypeSizeOption[] | []; 
  option?: ITypeProductOption[] | [];
}
export interface ITypeProductOption {
  name: string;
  price: number;
  state: boolean;
}

export interface ITypeSizeOption {
  name: string;
  price: number;
  state: boolean;
}