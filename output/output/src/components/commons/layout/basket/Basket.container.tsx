// import React, { useEffect } from "react";
// import {
//   AllPayment,
//   Order,
//   Payment,
//   PaymentBtn,
//   PaymentInfo,
//   OrderList,
//   Title,
//   Wrapper,
// } from "./Basket.style";
// import { useBasket } from "./basketUtils";
// import { Quantity } from "../../quantity/Quantity.container";

// export const Basket = () => {
//   const { basketItem } = useBasket();
//   const [totalPayment, setTotalPayment] = React.useState(0);

//   const handlePayment = () => {
//     // 주문한 메뉴들의 총 가격을 계산
//     const newTotalPayment = basketItem.reduce(
//       (total, menuItem) => total + menuItem.price, 0
//     );
//     setTotalPayment(newTotalPayment);
//   };

//   useEffect(() => {
//     // basketItem이 변경될 때마다 handlePayment 함수 호출
//     handlePayment();
//   }, [basketItem]);

//   return (
//     <Wrapper>
//       <Order>
//         <Title>
//           order
//           <span>
//             총 <em>{basketItem.length}</em>개
//           </span>
//         </Title>

//         <OrderList>
//           {/* 주문한 메뉴들을 렌더링 */}
//           {basketItem.map((menuItem, index) => (
//             <div key={index}>
//               메뉴 이름 : {menuItem.name}
//               <br />
//               가격 : {menuItem.price}원
//               <Quantity/>
//             </div>
//           ))}
//         </OrderList>
//       </Order>

//       <Payment>
//         <PaymentInfo>{/* 결제 정보 */}</PaymentInfo>
//         <AllPayment>
//           <span>총 결제금액</span>
//           <span>
//             <em>{totalPayment}</em>원
//           </span>
//         </AllPayment>

//         <PaymentBtn onClick={handlePayment}>결제하기</PaymentBtn>
//       </Payment>
//     </Wrapper>
//   );
// };

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
import { Quantity } from "../../quantity/Quantity.container"; // 경로는 실제 폴더 구조에 맞게 변경

export const Basket = () => {
  const { basketItem } = useBasket();
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
          {/* 주문한 메뉴들을 렌더링 */}
          {basketItem.map((menuItem, index) => (
            <div key={index}>
              메뉴 이름: {menuItem.name}
              <br />
              가격 :{" "}
              {new String(menuItem.price).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
              {/* Quantity 컴포넌트를 가져와서 사용 */}
              <Quantity
                onChange={(newQuantity) => handlePayment(menuItem.name, newQuantity)}
                defaultQuantity={menuItem.quantity || 1}
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

        <PaymentBtn>결제하기</PaymentBtn>
      </Payment>
    </Wrapper>
  );
};
