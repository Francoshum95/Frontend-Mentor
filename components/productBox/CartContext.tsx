import { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { productType } from "./type";
import { defalutMaxQuantity } from "./constant";

type prosp = {
  maxQuantity?: number
  children: ReactNode;
};

export type checkoutItemType = productType[];
export type onAddCartType = (newItem: productType) => void;
export type onRemoveProductType = (item: productType) => void;

export type CartCtxType = {
  checkoutItem: checkoutItemType;
  onAddCart: onAddCartType;
  onRemoveProduct: onRemoveProductType;
};

export const CartCtx = createContext<CartCtxType>({
  checkoutItem: [],
  onAddCart: (newItem: productType) => {},
  onRemoveProduct: (item: productType) => {},
});

export const CartContext = ({ maxQuantity=defalutMaxQuantity, children }: prosp) => {
  const [checkoutItem, setCheckoutItem] = useState<checkoutItemType>([]);

  const onAddCart = (newItem: productType) => {
    const cloneCheckoutItem = [...checkoutItem];

    const targetItem = cloneCheckoutItem.find(
      (item) => newItem.productName === item.productName
    );

    if (targetItem) {
      targetItem.productQuantity += newItem.productQuantity;
      if (targetItem.productQuantity > maxQuantity){
        return 
      }
    } else {
      cloneCheckoutItem.push(newItem);
    }

    setCheckoutItem(cloneCheckoutItem);
  };

  const onRemoveProduct = (product: productType) => {
    const cloneCheckoutItem = [...checkoutItem];
    const filteredItems = cloneCheckoutItem.filter(
      (item) => item.productName !== product.productName
    );

    setCheckoutItem(filteredItems);
  };

  return (
    <CartCtx.Provider value={{ checkoutItem, onAddCart, onRemoveProduct }}>
      {children}
    </CartCtx.Provider>
  );
};
