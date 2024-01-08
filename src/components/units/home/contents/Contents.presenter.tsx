import {
  CardContainer,
  ProductContainer,
  Title,
  Wrapper,
} from "./Contents.style";
import Menu from "../../../commons/menu/Menu.container";
import { useEffect, useState } from "react";
import { Card01 } from "../../../commons/cards/card01/Card01.container";
import { Modal01 } from "../../../commons/modals/modal01/Modal01.container";
import { ITypeProducts } from "../../../../commons/mock/Data.types";
import { useRecoilState } from "recoil";
import { productState } from "../../../../commons/store/store";

export const ContentsUI = () => {
  const [isCate, setIsCate] = useState("coffee");

  const [isModal, setIsModal] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);

  const [isData, setIsData] = useState(false);

  const [_, setProduct] = useRecoilState<ITypeProducts>(productState);

  const onClickOpenModal = (item) => () => {
    setIsModal((prev: boolean) => !prev);
    setProduct(item);
    console.log(item);
  };

  useEffect(() => {
    const getCategories = async () => {
      if (!isData) {
        try {
          const result = await fetch("/products").then((res: Response) =>
            res.json()
          );
          setAllProducts(result.data);
          const filteredProducts = result.data.filter(
            (product: ITypeProducts) => product.categoryId === isCate
          );
          setProducts(filteredProducts);
          setIsData(true);
        } catch (error) {}
      } else {
        const filteredProducts = allProducts.filter(
          (product: ITypeProducts) => product.categoryId === isCate
        );
        setProducts(filteredProducts);
      }
    };
    void getCategories();
  }, [isCate]);

  return (
    <Wrapper>
      <Menu isCate={isCate} setIsCate={setIsCate} />
      <ProductContainer>
        <Title>∞ {isCate} ∞</Title>
        <CardContainer>
          {products.map((el, index: number) => (
            <Card01
              key={index}
              product={el}
              onClickOpenModal={onClickOpenModal}
            />
          ))}
        </CardContainer>
      </ProductContainer>
      {isModal && <Modal01 />}
    </Wrapper>
  );
};
