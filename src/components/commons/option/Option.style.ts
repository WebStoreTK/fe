import styled from "@emotion/styled";
import { Common } from "../../../commons/style/emotion";

export const Wrapper = styled.div``;

export const Option = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  p {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    padding: 10px;
    border-radius: 10px;
    font-size: 1em;
    font-weight: bold;
    color: ${Common.color.point};
    background: ${Common.color.white};
    border: 1px solid ${Common.color.point};
    cursor: pointer;
  }
  em {
    color: ${Common.color.darkGray};
    span {
      display: inline-block;
      font-size: 1.1em;
      margin: 0 2px 3px 2px;
    }
  }
  &.on {
    p {
      color: ${Common.color.white};
      background: ${Common.color.point};
    }
  }
`;
