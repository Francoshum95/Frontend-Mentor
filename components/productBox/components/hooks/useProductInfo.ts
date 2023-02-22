import { useState, useContext } from "react";
import { CartCtx } from "@components/productBox/CartContext";
import { INCREASE, DECREASE } from "@components/productBox/constant";
import type { useProductinfoProps } from "../ProductInfo";

type quantityType = number;

type onChangeProductQuantityType = (
  direction: typeof INCREASE | typeof DECREASE
) => void;
type onClickAddCartType = () => void;

const defaultQuantity = 0;

const useProductInfo = ({
  productImage,
  productName,
  originalPrice,
  markdownPrice,
  maxQuantity=9999999,
}:useProductinfoProps) => {
  const { onAddCart } = useContext(CartCtx);
  const [quantity, setQuantity] = useState<quantityType>(defaultQuantity);

  const isMin = quantity === defaultQuantity;
  const isMax = quantity === maxQuantity;

  const onChangeProductQuantity: onChangeProductQuantityType = (
    direction
  ) => {

    if (direction === INCREASE && !isMax){
      setQuantity((quantity) => quantity + 1)
    } else if (direction === DECREASE && !isMin){
      setQuantity((quantity) => quantity - 1)
    }
  };

  const onClickAddCart:onClickAddCartType = () => {
    try {
      onAddCart({
        productImage,
        productName,
        originalPrice,
        markdownPrice,
        productQuantity: quantity
      })

      setQuantity(defaultQuantity)
    } catch(error){
      console.log(error)
    }
  };


  return {
    isMin,
    isMax,
    quantity,
    onClickAddCart,
    onChangeProductQuantity
  }
};

export default useProductInfo;
