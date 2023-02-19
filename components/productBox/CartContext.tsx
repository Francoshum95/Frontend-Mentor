import { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { productType } from "./type";

type prosp = {
  children: ReactNode
}

export type checkoutItemType = productType[]
export type onAddCartType = (newItem: productType) => void;
export type CartCtxType = [checkoutItemType, onAddCartType]

export const CartCtx = createContext<CartCtxType>([[], (newItem:productType) => {}]);

export const CartContext = ({children}:prosp) => {
  const [checkoutItem, setCheckoutItem] = useState<checkoutItemType>([]);

  const onAddCart = (newItem:productType) => {
    const cloneCheckoutItem = [...checkoutItem];
    const targetItem = cloneCheckoutItem.find(item => newItem.productName === item.productName);

    if (targetItem){
      targetItem.productQuantity += newItem.productQuantity;
    } else {
      cloneCheckoutItem.push(newItem)
    }
    
    setCheckoutItem(cloneCheckoutItem)
  };

  return (
    <CartCtx.Provider
      value={[checkoutItem, onAddCart]}
    >
      {children}
    </CartCtx.Provider>
  )
};


