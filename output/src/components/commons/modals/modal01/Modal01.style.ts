import styled from "@emotion/styled";
import { Common } from "../../../../commons/style/emotion";

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

// 모달 크기 조절
export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 800px;
  height: 550px;
  background: ${Common.color.white};
  border-radius: 10px;
  padding: 20px;
  gap: 10px;
`;

export const ProductImage = styled.div`
  width: 200px;
  height: 100%;
  border-radius: 10px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: scale-down;  // 이미지의 비율 유지하며 채우기
  }
`;

export const ProductInfo = styled.div`
  width: calc(100% - 200px);
  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background: #bce55c;
`;

export const ProductTop = styled.div`
  padding: 1em 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-bottom: 1px solid ${Common.color.line};
  align-items: center;
  background: #faed7d;
`;

export const ProductName = styled.h5`
  font-size: 2em;
`;

export const ProductPrice = styled.p`
  display: flex;
  align-items: center;
  font-size: 2em;
  font-weight: bold;
  span {
    display: inline-block;
    margin-bottom: 2px;
    margin-right: 3px;
    font-size: 1.3em;
    color: ${Common.color.point};
  }
`;

export const ProductOption = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const OptionTitle = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.3em;
  font-weight: bold;
  height: 43px;
  background: #cbefd5;
`;

export const OptionContainer = styled.div`
  display: flex;
  height: 45px;
  gap: 50px;
  background: #ffa873;
`;
export const AddBtn = styled.div`
  width: 100%;
  height: 45px;
  margin-top: auto;
`;

// export const ModalClose = styled.div`
//   position: absolute;
//   top: 20px;
//   right: 20px;
//   border: none;
//   // background-color: transparent;
//   font-size: 35px;
//   font-weight: bolder;
//   background: #99004c;
// `;

export const ReleaseBtn = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  // background-color: transparent;
  font-size: 35px;
  font-weight: bolder;
<<<<<<< HEAD
  background: #0000a0;
`;