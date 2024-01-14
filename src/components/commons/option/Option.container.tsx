import { Option, Wrapper } from "./Option.style";
import { useEffect, useState } from "react";
import { IPropsIceOptions, IPropsOptions, IPropsSizeOptions} from "./Option.types";
import { useRecoilState } from "recoil";
import {
  ITypeProductOption,
  ITypeProducts,
  ITypeSizeOption,
} from "../../../commons/mock/Data.types";
import { productState } from "../../../commons/store/store";

export const Options = (props: IPropsOptions) => {
  const [product, setProduct] = useRecoilState<ITypeProducts>(productState);

  const onClickOption = (name: string) => () => {
    const updatedOptions = product.option?.map((option) => {
      if (option.name === name) {
        return { ...option, state: !option.state };
      }
      return option;
    });
  
    const updatedProduct = { ...product, option: updatedOptions };
    setProduct(updatedProduct);

    // console.log(`옵션 ${name}이 클릭`);
    // console.log("updatedProduct.option:", updatedProduct.option);
    if (updatedOptions) {
      updatedOptions.forEach((option) => {
        console.log(`옵션 ${option.name}의 상태:`, option.state);
      });
    }
    

  };

  // const [options, setOptions] = useState(product.option);
  // const [optionState, setOptionState] = useState(false);
  //
  // const updateOptionState = (name: string, newState: boolean) => {
  //   const updatedOptions = options.map((option) => {
  //     if (option.name === name) {
  //       return { ...option, state: newState };
  //     }
  //     return option;
  //   });
  //
  //   setOptions(updatedOptions);
  // };
  //
  // const onClickOption = (name: string) => () => {
  //   setOptionState((prev: boolean) => {
  //     const newState = !prev;
  //     updateOptionState(name, newState);
  //     return newState;
  //   });
  // };
  
  // useEffect(() => {
  //   console.log(product.option?.state);
  // }, []);

  return (
    <Wrapper>
      <Option
        className={props.option?.state ? "on" : ""}
        onClick={onClickOption(props.option.name)}
      >
        <p>{props.option.name}</p>
        {props.option.price === 0 ? (
          <em>free</em>
        ) : (
          <em>
            +<span>{props.option.price}</span>원
          </em>
        )}
      </Option>
    </Wrapper>
  );
};

//사이즈 옵션 부분 추가
export const SizeOptions = (props: IPropsSizeOptions) => {
  const [product, setProduct] = useRecoilState<ITypeProducts>(productState);

  const onClickSizeOption = (name: string) => () => {
    const updatedSizeOptions = product.sizeOption?.map((sizeOption) => {
      if (sizeOption.name === name) {
        // 클릭된 옵션은 선택 상태로 변경
        return { ...sizeOption, state: true };
      } else {
        // 나머지 옵션들은 선택 해제 상태로 변경
        return { ...sizeOption, state: false };
      }
    });

    const updatedProduct = { ...product, sizeOption: updatedSizeOptions };
    setProduct(updatedProduct);

    if (updatedSizeOptions) {
      updatedSizeOptions.forEach((sizeOption) => {
        console.log(`사이즈 옵션 ${sizeOption.name}의 상태:`, sizeOption.state);
      });
    }
    
  };

  // useEffect(() => {
  //   console.log(product.sizeOption?.state);
  // }, []);

  return (
    <Wrapper>
      <Option
        className={props.sizeOption?.state ? "on" : ""}
        onClick={onClickSizeOption(props.sizeOption.name)}
      >
        <p>{props.sizeOption.name}</p>
        {props.sizeOption.price === 0 ? (
          <em></em>
        ) : (
          <em>
            +<span>{props.sizeOption.price}</span>원
          </em>
        )}
      </Option>
    </Wrapper>
  );
};

//아이스 옵션 추가
export const IceOptions = (props: IPropsIceOptions) => {
  const [product, setProduct] = useRecoilState<ITypeProducts>(productState);

  const onClickIceOption = (name: string) => () => {

      // "Only Ice" 일때는 상태를 변경못하게 함
      if (name === "Only Ice") {
        return;
      }
      

      const updatedIceOptions = product.iceOption?.map((iceOption) => {
        if (iceOption.name === name) {
          // 클릭된 옵션은 선택 상태로 변경
          return { ...iceOption, state: true };
        } else {
          // 나머지 옵션들은 선택 해제 상태로 변경
          return { ...iceOption, state: false };
        }
      });

    const updatedProduct = { ...product, iceOption: updatedIceOptions };
    setProduct(updatedProduct);

    if (updatedIceOptions) {
      updatedIceOptions.forEach((iceOption) => {
        console.log(`아이스 옵션 ${iceOption.name}의 상태:`, iceOption.state);
      });
    }
    
  };

  // useEffect(() => {
  //   console.log(product.iceOption?.state);
  // }, []);

  return (
    <Wrapper>
      <Option
        className={props.iceOption?.state ? "on" : ""}
        onClick={onClickIceOption(props.iceOption.name)}
      >
        <p>{props.iceOption.name}</p>
        {props.iceOption.price === 0 ? (
          <em></em>
        ) : (
          <em>
            +<span>{props.iceOption.price}</span>원
          </em>
        )}
      </Option>
    </Wrapper>
  );
};