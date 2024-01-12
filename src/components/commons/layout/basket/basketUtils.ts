// // basketUtils.ts

import { useRecoilState } from "recoil";
import { addProductState } from "../../../../commons/store/store";
import { ITypeProducts } from "../../../../commons/mock/Data.types";

export const useBasket = () => {
    const [basketItem, setBasketItem] = useRecoilState<ITypeProducts[]>(addProductState);

    const handleOrder = (newOrders: ITypeProducts[]) => {
    // 주문 처리
    console.log("장바구니:", newOrders);

    // 총 결제금액 업데이트
    const newTotalPayment = newOrders.reduce(
        (total, order) => total + order.price, 0
    );
    console.log("총 결제금액:", newTotalPayment, "원");
    };

    const addToBasket = (product: ITypeProducts, options: any[], size: any[]) => {
    // 목록 추가
    const newBasket = [...basketItem, product, ...options, ...size];

    setBasketItem(newBasket);

    console.log("선택 :", newBasket);

    handleOrder(newBasket);
    };

    return { basketItem, addToBasket };
};


