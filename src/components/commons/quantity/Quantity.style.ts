import styled from "@emotion/styled";
import { Common } from "../../../commons/style/emotion";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    display: inline-block;
    width: 50px;
    text-align: center;
    font-size: 1.5em;
    margin-bottom: 5px;
  }
  svg {
    cursor: pointer;
    width: 30px;
    height: 30px;
    color: ${Common.color.point};
  }
`;

export const Minus = styled.div``;
export const Plus = styled.div``;
