import styled from "@emotion/styled";
import { Common } from "../../../../commons/style/emotion";

export const Wrapper = styled.div`
  transition: all 0.2s ease-in;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1em;
  font-weight: bold;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  color: ${Common.color.white};
  border: ${Common.color.point};
  background: ${Common.color.point};
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const BtnText = styled.p`
  text-transform: uppercase;
  letter-spacing: 0.2em;
`;
