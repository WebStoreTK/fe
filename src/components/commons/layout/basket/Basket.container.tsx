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

// export const Basket = () => {
//   const { basketItem } = useBasket();
  
//   const handlePayment = () => {
//     // handleOrder 함수에서 처리하도록 변경
//   };

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
//             </div>
//           ))}
//         </OrderList>
//       </Order>

//       <Payment>
//         <PaymentInfo>{/* 결제 정보 */}</PaymentInfo>
//         <AllPayment>
//           <span>총 결제금액</span>
//           <span>
//             {/* 총 결제금액 출력 로직 */}
//             <em></em>원
//           </span>
//         </AllPayment>

//         <PaymentBtn onClick={handlePayment}>결제하기</PaymentBtn>
//       </Payment>
//     </Wrapper>
//   );
// };




import React, { useEffect } from "react";
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

export const Basket = () => {
  const { basketItem } = useBasket();
  const [totalPayment, setTotalPayment] = React.useState(0);

  const handlePayment = () => {
    // 주문한 메뉴들의 총 가격을 계산
    const newTotalPayment = basketItem.reduce(
      (total, menuItem) => total + menuItem.price, 0
    );
    setTotalPayment(newTotalPayment);
  };

  useEffect(() => {
    // basketItem이 변경될 때마다 handlePayment 함수 호출
    handlePayment();
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
              가격 : {menuItem.price}원
            </div>
          ))}
        </OrderList>
      </Order>

      <Payment>
        <PaymentInfo>{/* 결제 정보 */}</PaymentInfo>
        <AllPayment>
          <span>총 결제금액</span>
          <span>
            <em>{totalPayment}</em>원
          </span>
        </AllPayment>

        <PaymentBtn onClick={handlePayment}>결제하기</PaymentBtn>
      </Payment>
    </Wrapper>
  );
};
