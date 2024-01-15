import { Minus, Plus, Wrapper } from "./Quantity.style";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { useState} from "react";

export const Quantity = () => {
  const [quantity, setQuantity] = useState(1);  // 수량 디폴트 값 1로 변경
  
  const onClickBtn = (button: string) => () => {
    if (button === "minus") {
      if (quantity === 1) {
        alert("최소 수량은 1잔 입니다.");
      } else {
        setQuantity((prev: number) => prev - 1);
      }
    } else if (button === "plus") {
      if(quantity === 10) {
        alert("최대 수량은 10잔 입니다.")
      } else{
      setQuantity((prev: number) => prev + 1);
      }
    }
    // 콘솔 창에 + 와 - 수 세알리기
    console.log(quantity);
  };


  return (
    <Wrapper>
      <Minus onClick={onClickBtn("minus")}>
        <AiFillMinusCircle />
      </Minus>
      <span>{quantity}</span>
      <Plus onClick={onClickBtn("plus")}>
        <AiFillPlusCircle />
      </Plus>
    </Wrapper>
  )
};


// import React, { useState } from "react";
// import { Minus, Plus, Wrapper } from "./Quantity.style";
// import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

// interface QuantityProps {
//   onChange: (newQuantity: number) => void;
//   defaultQuantity: number;
// }

// export const Quantity: React.FC<QuantityProps> = ({ onChange, defaultQuantity }) => {
//   const [quantity, setQuantity] = useState(defaultQuantity);

//   const onClickBtn = (button: string) => () => {
//     setQuantity((prev: number) => {
//       let newQuantity = prev;
//       if (button === "minus") {
//         if (newQuantity === 1) {
//           alert("최소 수량은 1잔 입니다.");
//         } else {
//           newQuantity = prev - 1;
//         }
//       } else if (button === "plus") {
//         if (newQuantity === 10) {
//           alert("최대 수량은 10잔 입니다.");
//         } else {
//           newQuantity = prev + 1;
//         }
//       }
//       onChange(newQuantity);
//       return newQuantity;
//     });
//   };

//   return (
//     <Wrapper>
//       <Minus onClick={onClickBtn("minus")}>
//         <AiFillMinusCircle />
//       </Minus>
//       <span>{quantity}</span>
//       <Plus onClick={onClickBtn("plus")}>
//         <AiFillPlusCircle />
//       </Plus>
//     </Wrapper>
//   );
// };

