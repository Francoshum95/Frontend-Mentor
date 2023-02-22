import { useState, useContext, useMemo } from "react";
import { CartCtx, checkoutItemType } from "@components/productBox/CartContext";
import { INCREASE, DECREASE } from "@components/productBox/constant";
import type { useProductinfoProps } from "../ProductInfo";

type quantityType = number;

type onChangeProductQuantityType = (
  direction: typeof INCREASE | typeof DECREASE
) => void;
type onClickAddCartType = () => void;

const defaultQuantity = 0;

const getMaxQuantity = ({
  checkoutItem,
  productName,
  maxQuantity,
}: {
  checkoutItem: checkoutItemType;
  productName: string;
  maxQuantity: number;
}) => {
  const targetItem = checkoutItem.find(
    (item) => item.productName === productName
  );

  if (targetItem) {
    return targetItem.productQuantity >= maxQuantity;
  }

  return false;
};

const useProductInfo = ({
  productImage,
  productName,
  originalPrice,
  markdownPrice,
  maxQuantity = 9999999,
}: useProductinfoProps) => {
  const { checkoutItem, onAddCart } = useContext(CartCtx);
  const [quantity, setQuantity] = useState<quantityType>(defaultQuantity);

  const isMin = quantity === defaultQuantity;
  const isMax = quantity === maxQuantity
  const isCartMax = useMemo(() => 
    getMaxQuantity({
      checkoutItem,
      productName,
      maxQuantity,
    }), [checkoutItem]) 
  
  const onChangeProductQuantity: onChangeProductQuantityType = (direction) => {
    if (direction === INCREASE && !isMax || isCartMax) {
      setQuantity((quantity) => quantity + 1);
    } else if (direction === DECREASE && !isMin) {
      setQuantity((quantity) => quantity - 1);
    }
  };

  const onClickAddCart: onClickAddCartType = () => {
    try {
      onAddCart({
        productImage,
        productName,
        originalPrice,
        markdownPrice,
        productQuantity: quantity,
      });

      setQuantity(defaultQuantity);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    isMin,
    isMax,
    isCartMax,
    quantity,
    setQuantity,
    onClickAddCart,
    onChangeProductQuantity,
  };
};

export default useProductInfo;
