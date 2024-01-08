import styled from "@emotion/styled";
import { Common } from "../../../../commons/style/emotion";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em 1.4em;
  justify-content: space-between;
  height: 100%;
`;

export const Order = styled.div``;

export const Title = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2em;
  text-transform: uppercase;
  margin-bottom: 30px;
  font-weight: 900;
  span {
    font-weight: 500;
    font-size: 0.5em;
    em {
      font-size: 1.2em;
      color: ${Common.color.point};
      display: inline-block;
      margin: 0 3px;
    }
  }
`;

export const Payment = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PaymentInfo = styled.ul`
  font-size: 1.1em;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0;
  border-bottom: 1px solid ${Common.color.line};
  li {
    display: flex;
    justify-content: space-between;
    span {
      color: ${Common.color.darkGray};
      em {
        display: inline-block;
        margin-right: 3px;
        font-size: 1.2em;
        font-weight: bold;
        color: ${Common.color.point};
      }
    }
  }
`;

export const AllPayment = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  span {
    font-size: 1.2em;
    font-weight: bold;
    em {
      display: inline-block;
      margin-right: 3px;
      font-size: 1.1em;
      color: ${Common.color.point};
    }
  }
`;

export const PaymentBtn = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  width: 100%;
  font-size: 1.2em;
  font-weight: bold;
  border-radius: 50px;
  color: ${Common.color.white};
  background: ${Common.color.point};
`;
