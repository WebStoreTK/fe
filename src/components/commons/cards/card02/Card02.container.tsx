import {
  Delete,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductQuantity,
  ProductTop,
  Wrapper,
} from "./Card02.style";
import { Quantity } from "../../quantity/Quantity.container";

export const Card02 = () => {
  const onClickDelete = () => {};

  return (
    <Wrapper>
      <ProductImage></ProductImage>
      <ProductInfo>
        <ProductTop>
          <ProductName>헤이즐넛아메리카노</ProductName>
          <Delete onClick={onClickDelete} />
        </ProductTop>

        <ProductPrice>
          <span>2,500</span>원
        </ProductPrice>
        <ProductQuantity>
          <Quantity />
        </ProductQuantity>
      </ProductInfo>
    </Wrapper>
  );
};
