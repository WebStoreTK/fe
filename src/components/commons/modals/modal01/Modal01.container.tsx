import {
  AddBtn,
  ModalContainer,
  OptionContainer,
  OptionTitle,
  ProductImage,
  ProductInfo,
  ReleaseBtn,
  ProductName,
  ProductOption,
  ProductPrice,
  ProductTop,
  Wrapper,
} from "./Modal01.style";
import { Options, SizeOptions } from "../../option/Option.container";
import {
  ITypeProductOption,
  ITypeProducts,
  ITypeSizeOption,
} from "../../../../commons/mock/Data.types";
import { Button02 } from "../../buttons/button01/Button01.container";
import { Fragment, useState } from "react";
import { Quantity } from "../../quantity/Quantity.container";
import { addProductState, productState } from "../../../../commons/store/store";
import { useRecoilState } from "recoil";

export const Modal01 = () => {
  const [options, setOptions] = useState([]);
  const [size, setSizeOptions] = useState([]);
  const [product, setProduct] = useRecoilState<ITypeProducts>(productState);
  const [basketItem, setBasketItem] = useRecoilState<ITypeProducts[]>(addProductState);

  const [isCardModal, setIsCardModal] = useState(true);

  const onClickAddBasket = () => {
      const newBasket = [...basketItem, product, ...options, ...size];
      setBasketItem(newBasket);
      console.log("선택 :", newBasket);
  };
  

  const onClickCloseModal = () => {
    setIsCardModal(false);
  };

  if (!isCardModal) {
    // 모달이 닫혔을 때
    return null; // 또는 다른 방식으로 모달을 렌더링하지 않도록 처리
  }

  return (
    <Wrapper>
      <ModalContainer>
        <ProductImage></ProductImage>
        <ProductInfo>
          <ProductTop>
            {/* 모달 닫기 */}
            {/* <ModalClose> */}
            {/* <span style={{ cursor: "pointer" }} onClick={onClickCloseModal}>
                X
              </span> */}
            {/* </ModalClose> */}

            <ReleaseBtn
              style={{ cursor: "pointer" }}
              onClick={onClickCloseModal}
            >
              X
            </ReleaseBtn>

            {/* 상품 이름 */}
            <ProductName>{product.name}</ProductName>

            {/* 상품 가격 */}
            <ProductPrice>
              <span>{product.price}</span>원
            </ProductPrice>

            <Quantity />
          </ProductTop>

          <ProductOption>
            <OptionTitle>사이즈 옵션</OptionTitle>
              {product.sizeOption?.length === 0 ? (
                <div>사이즈 옵션이 없습니다.</div>
              ) : (
                <OptionContainer>
                  {product.sizeOption?.map(
                    (si: ITypeSizeOption, index: number) => (
                    <Fragment key={index}>
                      <SizeOptions
                        sizeOption={si}
                        selectedSize={size}
                        setSelectedSize={setSizeOptions}
                      />
                    </Fragment>
                  ))}
                </OptionContainer>
              )}
          </ProductOption>

          <ProductOption>
            <OptionTitle>옵션</OptionTitle>
            {product.option?.length === 0 ? (
              <div>옵션이 없습니다.</div>
            ) : (
              <OptionContainer>
                {product.option?.map(
                  (el: ITypeProductOption, index: number) => (
                    <Fragment key={index}>
                      <Options
                        option={el}
                        options={options}
                        setOptions={setOptions}
                      />
                    </Fragment>
                  )
                )}
              </OptionContainer>
            )}
          </ProductOption>

          <AddBtn>
            <Button02 btnText="choice2222" onClickBtn={onClickAddBasket} />
          </AddBtn>
        </ProductInfo>
      </ModalContainer>
    </Wrapper>
  );
};
