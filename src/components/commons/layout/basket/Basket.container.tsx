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
  Delete,
} from "./Basket.style";
import { useBasket } from "./basketUtils";

export const Basket = () => {
  const { basketItem, removeFromBasket } = useBasket();
  const [totalPayment, setTotalPayment] = useState(0);

  const handlePayment = (itemName: string, newQuantity: number) => {
    // 주문한 메뉴들의 총 가격을 계산
    const newTotalPayment = basketItem.reduce((total, menuItem) => {
      if (menuItem.name === itemName) {
        return total + menuItem.price * newQuantity;
      }
      return total + menuItem.price * (menuItem.quantity || 1); // 다른 메뉴들은 이전 수량 유지
    }, 0);
    setTotalPayment(newTotalPayment);
  };

  // 목록 삭제
  const handleRemoveItem = (itemName: string) => {
    removeFromBasket(itemName);
    console.log("handleRemoveItem : ", itemName);
  };

  useEffect(() => {
    // basketItem이 변경될 때마다 handlePayment 함수 호출
    handlePayment("", 1) // 1은 기본 수량
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
          {basketItem.map((menuItem, index) => (
            <div key={index}>
              <Delete onClick={() => handleRemoveItem(menuItem.name)} />
              <div>
                메뉴 이름 : {menuItem.name}
                <br />
                가격 :{" "}
                {new String(menuItem.price).replace(
                  /\B(?=(\d{3})+(?!\d))/g,
                  ","
                )}{" "}
                원
                <br />
                수량 : {menuItem.quantity}
              </div>
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

        <PaymentBtn>결제하기</PaymentBtn>
      </Payment>
    </Wrapper>
  );
};
