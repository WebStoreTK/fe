import { css } from "@emotion/react";
import { Common } from "./emotion";
import styled from "@emotion/styled";

export const GlobalStyle = css`
  @import url("https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600;700&family=Rubik+Mono+One&display=swap");
  * {
    margin: 0;
    box-sizing: border-box;
    ::-webkit-scrollbar {
      width: 0;
      background: transparent;
    }
  }
  body {
    font-family: "Rajdhani", sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: ${Common.color.default};
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  em {
    font-style: normal;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  button {
    border: 0;
    cursor: pointer;
    background: #fff;
  }
  input {
    font-size: 15px;
  }
  button:focus,
  input:focus,
  textarea:focus {
    outline: none;
    border: 1.3px solid #0d8f68;
    &.bottomBorder {
      border: none;
      border-bottom: 1.3px solid #0d8f68;
    }
  }
  input::placeholder,
  textarea::placeholder {
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 23px;
    color: #bdbdbd;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  height: 100%;
`;
