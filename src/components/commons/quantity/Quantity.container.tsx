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
//     if (button === "minus") {
//       if (quantity === 1) {
//         alert("최소 수량은 1잔 입니다.");
//       } else {
//         setQuantity((prev: number) => prev - 1);
//       }
//     } else if (button === "plus") {
//       if(quantity === 10) {
//         alert("최대 수량은 10잔 입니다.")
//       } else{
//       setQuantity((prev: number) => prev + 1);
//       }
//     }
//     // 콘솔 창에 + 와 - 수 세알리기
//     console.log(quantity);
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
//   )
// };

// // Quantity.container.tsx
// import React, { useState } from "react";
// import { Wrapper, Minus, Plus } from "./Quantity.style";
// import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";

// export const Quantity = ({ onChange }: { onChange: (newQuantity: number) => void }) => {
//   const [quantity, setQuantity] = useState(1);

//   const handleQuantityChange = (newQuantity : number) => {
//     setQuantity(newQuantity);
//     onChange(newQuantity); // 부모 컴포넌트에 새로운 수량 전달
//   };

//   const onClickBtn = (button : string) => () => {
//     if (button === "minus") {
//       if (quantity === 1) {
//         alert("최소 수량은 1잔 입니다.");
//       } else {
//         handleQuantityChange(quantity - 1);
//       }
//     } else if (button === "plus") {
//       if (quantity === 10) {
//         alert("최대 수량은 10잔 입니다.");
//       } else {
//         handleQuantityChange(quantity + 1);
//       }
//     }
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

