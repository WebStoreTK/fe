import {
  AllPayment,
  Order,
  Payment,
  PaymentBtn,
  PaymentInfo,
  Title,
  Wrapper,
} from "./Basket.style";
import { useState } from "react";

export const Basket = () => {
  const [orders, setOrders] = useState([]); // 초기 주문 목록을 빈 배열로 설정
  const [totalPayment, setTotalPayment] = useState(0);



  // const handleOrder = (menuItem) => {
  //   // 주문 처리 로직을 추가합니다.
  //   // 선택한 메뉴를 주문 목록에 추가합니다.
  //   const newOrders = [...orders, menuItem];
  //   setOrders(newOrders);
  //   console.log(newOrders);

  //   // 총 결제금액을 업데이트합니다.
  //   const newTotalPayment = newOrders.reduce(
  //     (total, order) => total + order.price,
  //     0
  //   );
  //   setTotalPayment(newTotalPayment);
  // };

  const handlePayment = () => {
    // 결제 처리 로직을 추가하세요.
    // 예시로는 간단히 결제 버튼 클릭 시 총 결제금액을 출력하는 것으로 설정합니다.
    console.log("총 결제금액:", totalPayment, "원");
    // 여기에 실제 결제 로직을 추가해야 합니다.
  };

  return (
    <Wrapper>
      <Order>
        <Title>
          order
          <span>
            총 <em>{orders.length}</em>개
          </span>
        </Title>

        {/* 주문한 메뉴들을 렌더링합니다. */}
        {orders.map((menuItem, index) => (
          <div key={index}>
            {menuItem.name} - {menuItem.price}원
          </div>
        ))}

        {/* 주문 처리 버튼을 추가합니다. */}
        <button
          onClick={() =>
            handleOrder({ name: "아이스 아메리카노", price: 3000 })
          }
        >
          아이스 아메리카노 주문
        </button>
      </Order>

      <Payment>
        <PaymentInfo>{/* 결제 정보 */}</PaymentInfo>
        <AllPayment>
          <span>총 결제금액</span>
          <span>
            <em>{totalPayment}</em>원
          </span>
        </AllPayment>

        {/* 결제하기 버튼을 추가하고 클릭 시 handlePayment 함수를 호출합니다. */}
        <PaymentBtn onClick={handlePayment}>결제하기</PaymentBtn>
      </Payment>
    </Wrapper>
  );
};
