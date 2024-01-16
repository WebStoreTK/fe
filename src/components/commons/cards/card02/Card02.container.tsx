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
  const handleQuantityChange = (newQuantity: number) => {
    // 수량이 변경될 때 수행할 작업...
    console.log(`수량이 변경되었습니다. 새로운 수량: ${newQuantity}`);

    // 또는 실제로 필요한 작업을 여기에 추가할 수 있습니다.
    // 예를 들어, 상태 업데이트, API 호출 등...
  };

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
          <Quantity/>
        </ProductQuantity>
      </ProductInfo>
    </Wrapper>
  );
};
