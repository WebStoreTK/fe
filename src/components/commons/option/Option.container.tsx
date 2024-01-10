import { Option, Wrapper } from "./Option.style";
import { useEffect, useState } from "react";
import { IPropsOptions, IPropsSizeOptions} from "./Option.types";
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
  
  useEffect(() => {
    console.log(product.option?.state);
  }, []);

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
        return { ...sizeOption, state: !sizeOption.state };
      }
      return sizeOption;
    });

    const updatedProduct = { ...product, sizeOption: updatedSizeOptions };
    setProduct(updatedProduct);

    if (updatedSizeOptions) {
      updatedSizeOptions.forEach((sizeOption) => {
        console.log(`사이즈 옵션 ${sizeOption.name}의 상태:`, sizeOption.state);
      });
    }
    
  };

  useEffect(() => {
    console.log(product.sizeOption?.state);
  }, []);

  return (
    <Wrapper>
      <Option
        className={props.sizeOption?.state ? "on" : ""}
        onClick={onClickSizeOption(props.sizeOption.name)}
      >
        <p>{props.sizeOption.name}</p>
        {props.sizeOption.price === 0 ? (
          <em>무료</em>
        ) : (
          <em>
            +<span>{props.sizeOption.price}</span>원
          </em>
        )}
      </Option>
    </Wrapper>
  );
};