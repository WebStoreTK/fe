import { BtnText, Wrapper } from "./Button01.style";
import { IPropsButton01 } from "./Button01.types";
import { IPropsButton02 } from "./Button01.types";
import { IPropsButton03 } from "./Button01.types";

export const Button01 = (props: IPropsButton01) => {
  return (
    <Wrapper onClick={props.onClickBtn}>
      <BtnText>{props.btnText}</BtnText>
    </Wrapper>
  );
};

export const Button02 = (props: IPropsButton02) => {
  return (
    <Wrapper onClick={props.onClickBtn}>
      <BtnText>{props.btnText}</BtnText>
    </Wrapper>
  );
};

export const Button03 = (props: IPropsButton03) => {
  return (
    <Wrapper onClick={props.onClickBtn}>
      <BtnText>{props.btnText}</BtnText>
    </Wrapper>
  );
};

