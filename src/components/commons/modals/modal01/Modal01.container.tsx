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
import { Options, SizeOptions} from "../../option/Option.container";
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

  const [product, setProduct] = useRecoilState<ITypeProducts>(productState);
  const [basketItem, setBasketItem] = useRecoilState<ITypeProducts | {}>(addProductState);

  const [isCardModal, setIsCardModal] = useState(true);


  const onClickAddBasket = () => {
    // 선택한 메뉴를 주문 목록에 추가하는 로직
    const newBasket = [...basketItem, product, ...options];
    setBasketItem(newBasket);
    console.log("야야야야" + newBasket);

    // 페이지 이동이 필요한 경우 React Router를 사용하여 이동할 수 있습니다.
    // history.push("/order"); // 예시로, 주문 페이지의 경로입니다. 필요에 따라 주석을 해제하고 경로를 수정하세요.
  };

  const onClickCloseModal = () => {
    setIsCardModal(false);
  };

  if (!isCardModal) {
    // 모달이 닫혔을 때
    return null; // 또는 다른 방식으로 모달을 렌더링하지 않도록 처리
  }

  // useEffect(() => {
  //   console.log(options);
  // }, [options]);

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
            <Button02 btnText="choice1111" onClickBtn={onClickAddBasket} />
          </AddBtn>
        </ProductInfo>
      </ModalContainer>
    </Wrapper>
  );
};
