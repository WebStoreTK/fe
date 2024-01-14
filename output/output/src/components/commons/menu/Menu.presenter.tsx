import { Cate, Categories } from "./Menu.style";
import { IPropsMenuUI } from "./Menu.types";
import { ITypeCategories } from "../../../commons/mock/Data.types";

export default function MenuUI(props: IPropsMenuUI) {
  return (
    <Categories>
      {props.categories?.map((el: ITypeCategories) => (
        <Cate
          key={el.name}
          id={el.id}
          className={props.isCate === el.id ? "on" : ""}
          onClick={props.onClickMoveToCate(el.id)}
        >
          {el.name}
        </Cate>
      ))}
    </Categories>
  );
}
