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
import { IceOptions, Options, SizeOptions } from "../../option/Option.container";
import {
  ITypeProductOption,
  ITypeProducts,
  ITypeSizeOption,
  ITypeIceOption,
} from "../../../../commons/mock/Data.types";
import { Button02 } from "../../buttons/button01/Button01.container";
import { Fragment, useState } from "react";
import { Quantity } from "../../quantity/Quantity.container";
import { addProductState, productState } from "../../../../commons/store/store";
import { useRecoilState } from "recoil";

export const Modal01 = () => {
  const [iced, setIceOptions] = useState([]);
  const [options, setOptions] = useState([]);
  const [size, setSizeOptions] = useState([]);
  const [product] = useRecoilState<ITypeProducts>(productState);
  const [basketItem, setBasketItem] =
    useRecoilState<ITypeProducts[]>(addProductState);

  const [isCardModal, setIsCardModal] = useState(true);

  // const onClickAddBasket = () => {
  //   // 목록 추가
  //   const newBasket = [...basketItem, product,...iced, ...options, ...size];
  //   setBasketItem(newBasket);
  //   console.log("선택 :", newBasket);

  //   // handleOrder(newBasket);
  // };

  const onClickAddBasket = () => {
    // 선택한 제품이 장바구니에 이미 있는지 확인
    const existingIndex = basketItem.findIndex(item => item.name === product.name);

    if (existingIndex !== -1) {
      // 이미 장바구니에 있는 경우: 수량 증가
      const updatedBasket = [...basketItem];
      updatedBasket[existingIndex] = {
        ...updatedBasket[existingIndex],
        quantity: (updatedBasket[existingIndex].quantity || 1) + 1,
      };
      setBasketItem(updatedBasket);
    } else {
      // 장바구니에 없는 경우: 새로운 항목 추가
      const newBasket = [...basketItem, { ...product, quantity: 1 }];
      setBasketItem(newBasket);
    }

    // 모달 닫기
    setIsCardModal(false);
  };

  const onClickCloseModal = () => {
    setIsCardModal(false);
  };

  if (!isCardModal) {
    // 모달이 닫혔을 때
    return null; 
  }

  return (
    <Wrapper>
      <ModalContainer>
        <ProductImage><img src={product.image} alt="menus"/></ProductImage>
        <ProductInfo>
          <ProductTop>
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

            <Quantity/>

            
          </ProductTop>

          <ProductOption>
            <OptionTitle></OptionTitle>
            {product.sizeOption?.length === 0 ? (
              <div>아이스 옵션이 없습니다.</div>
            ) : (
              <OptionContainer>
                {product.iceOption?.map(
                  (si: ITypeIceOption, index: number) => (
                    <Fragment key={index}>
                      <IceOptions
                        iceOption={si}
                        selectedIce={iced}
                        setSelectedIce={setIceOptions}
                      />
                    </Fragment>
                  )
                )}
              </OptionContainer>
            )}
          </ProductOption>

          <ProductOption>
            <OptionTitle>사이즈</OptionTitle>
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
                  )
                )}
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
            <Button02 btnText="choice" onClickBtn={onClickAddBasket} />
          </AddBtn>

        </ProductInfo>
      </ModalContainer>
    </Wrapper>
  );
};
