import {
  AllPayment,
  Order,
  Payment,
  PaymentBtn,
  // PaymentInfo,
  Title,
  Wrapper,
} from "./Basket.style";
import { Card02 } from "../../cards/card02/Card02.container";
import { useState } from "react";

export const Basket = () => {
  const [orders] = useState(1);

  return (
    <Wrapper>
      <Order>
        <Title>
          order
          <span>
            총 <em>{orders}</em>개
          </span>
        </Title>

        <Card02 />
        <Card02 />
      </Order>

      <Payment>
        {/* <PaymentInfo>
          <li>
            <span>결제금액</span>
            <span>
              <em>5,000</em>원
            </span>
          </li>
          <li>
            <span>할인금액</span>
            <span>
              <em>0</em>원
            </span>
          </li>
        </PaymentInfo> */}
        <AllPayment>
          <span>총 결제금액</span>
          <span>
            <em>0</em>원
          </span>
        </AllPayment>
        <PaymentBtn>결제하기</PaymentBtn>
      </Payment>
    </Wrapper>
  );
};
