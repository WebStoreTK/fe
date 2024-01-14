import React from 'react';
import { IPropsCard01 } from "./Card01.types";
import {
  AddBtn,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  Wrapper,
} from "./Card01.style";
import { Button01 } from "../../buttons/button01/Button01.container";



export const Card01 = (props: IPropsCard01) => {
  return (
    <Wrapper>
      <ProductImage><img src={props.product.image} alt="menus"/></ProductImage>
      <ProductInfo>
        <ProductName>{props.product.name}</ProductName>
        <ProductPrice>
          <span>{(new String(props.product.price)).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>원
        </ProductPrice>
        <AddBtn>
          <Button01
            btnText="choice!!"
            onClickBtn={props.onClickOpenModal(props.product)}
          />
        </AddBtn>
      </ProductInfo>
    </Wrapper>
  );
};
