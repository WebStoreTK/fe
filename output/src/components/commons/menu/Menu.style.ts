import styled from "@emotion/styled";
import { Common } from "../../../commons/style/emotion";

export const Categories = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 30px;
  border-bottom: 1px solid ${Common.color.line};
`;

export const Cate = styled.span`
  display: inline-block;
  padding: 15px 30px;
  border-radius: 30px;
  border: 1px solid ${Common.color.line};
  color: ${Common.color.darkGray};
  font-size: 1.2em;
  cursor: pointer;
  &.on {
    color: ${Common.color.white};
    background: ${Common.color.point};
    border: 1px solid ${Common.color.point};
  }
`;
