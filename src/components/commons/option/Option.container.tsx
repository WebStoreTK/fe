import { Option, Wrapper } from "./Option.style";
import { useEffect, useState } from "react";
import { IPropsOptions } from "./Option.types";
import { useRecoilState } from "recoil";
import {
  ITypeProductOption,
  ITypeProducts,
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
  //
  useEffect(() => {
    console.log(product.option?.state);
  }, []);

  return (
    <Wrapper>
      <Option
        className={product.option?.state ? "on" : ""}
        onClick={onClickOption(product.option?.name)}
      >
        <p>{props.option.name}</p>
        {props.option.price === 0 ? (
          <em>free </em>
        ) : (
          <em>
            +<span>{props.option.price}</span>원
          </em>
        )}
      </Option>
    </Wrapper>
  );
};
