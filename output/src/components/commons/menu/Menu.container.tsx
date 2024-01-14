import { IPropsMenu } from "./Menu.types";
import { useEffect, useState } from "react";
import MenuUI from "./Menu.presenter";
import enableMirageMock from "../../../commons/mock/rest";

export default function Menu(props: IPropsMenu) {
  const [categories, setCategories] = useState([]);

  const onClickMoveToCate = (cate: string) => () => {
    props.setIsCate(cate);
  };

  useEffect(() => {
    enableMirageMock();
    const getCategories = async () => {
      try {
        const result = await fetch("/categories").then((res) => res.json());

        setCategories(result.data);
      } catch (error) {}
    };
    void getCategories();
  }, []);

  return (
    <MenuUI
      categories={categories}
      isCate={props.isCate}
      onClickMoveToCate={onClickMoveToCate}
    />
  );
}
