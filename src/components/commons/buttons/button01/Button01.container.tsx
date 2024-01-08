import { BtnText, Wrapper } from "./Button01.style";
import { IPropsButton01 } from "./Button01.types";

export const Button01 = (props: IPropsButton01) => {
  return (
    <Wrapper onClick={props.onClickBtn}>
      <BtnText>{props.btnText}</BtnText>
    </Wrapper>
  );
};

// export const Button02 = (props: IPropsButton01) => {
//   return (
//     <Wrapper onClick={props.onClickBtn}>
//       <BtnText>{props.btnText}</BtnText>
//     </Wrapper>
//   );
// };
