import React, { useEffect, useState } from "react";
import {
  AllPayment,
  Order,
  Payment,
  PaymentBtn,
  PaymentInfo,
  OrderList,
  Title,
  Wrapper,
} from "./Basket.style";
import { useBasket } from "./basketUtils";
import { Quantity } from "../../quantity/Quantity.container";

export const Basket = () => {
  const { basketItem } = useBasket();
  const [totalPayment, setTotalPayment] = useState(0);

  const handlePayment = (newQuantity: number) => {
    // 주문한 메뉴들의 총 가격을 계산
    const newTotalPayment = basketItem.reduce(
      (total, menuItem) => total + menuItem.price * newQuantity,
      0
    );
    setTotalPayment(newTotalPayment);
    console.log(newTotalPayment);
  };

  useEffect(() => {
    // basketItem이 변경될 때마다 handlePayment 함수 호출
    handlePayment(1); // 1은 기본 수량
  }, [basketItem]);

  return (
    <Wrapper>
      <Order>
        <Title>
          order
          <span>
            총 <em>{basketItem.length}</em>개
          </span>
        </Title>

        <OrderList>
          {/* 주문한 메뉴들을 렌더링 */}
          {basketItem.map((menuItem, index) => (
            <div key={index}>
              메뉴 이름 : {menuItem.name}
              <br />
              가격 :{" "}
              {new String(menuItem.price).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
              <Quantity
                onChange={(newQuantity) => handlePayment(newQuantity)}
              />
            </div>  
          ))}
        </OrderList>
      </Order>

      <Payment>
        <PaymentInfo>{/* 결제 정보 */}</PaymentInfo>
        <AllPayment>
          <span>총 결제금액</span>
          <span>
            <em>
              {new String(totalPayment).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </em>
            원
          </span>
        </AllPayment>

        <PaymentBtn onClick={() => handlePayment(1)}>결제하기</PaymentBtn>
      </Payment>
    </Wrapper>
  );
};
