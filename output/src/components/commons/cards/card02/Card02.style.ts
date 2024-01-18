import styled from "@emotion/styled";
import { Common } from "../../../../commons/style/emotion";
import { IoCloseSharp } from "react-icons/io5";

export const Wrapper = styled.div`
  display: flex;
  gap: 1em;
  height: 150px;
  border-radius: 10px;
  background: ${Common.color.white};
  margin-bottom: 20px;
`;

export const ProductImage = styled.div`
  width: 120px;
  height: 100%;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.1);
`;

export const ProductInfo = styled.div`
  width: calc(100% - 120px);
  margin: 0.6em 0;
  display: flex;
  gap: 5px;
  flex-direction: column;
  border-radius: 10px;
`;

export const ProductTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Delete = styled(IoCloseSharp)`
  width: 25px;
  height: 25px;
  cursor: pointer;
  color: ${Common.color.point};
`;

export const ProductName = styled.h5`
  padding-top: 6px;
  font-size: 1.1em;
`;

export const ProductQuantity = styled.div`
  margin-top: auto;
`;

export const ProductPrice = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.2em;
  font-weight: bold;
  span {
    display: inline-block;
    margin-bottom: 2px;
    margin-right: 3px;
    font-size: 1.2em;
    color: ${Common.color.point};
  }
`;
