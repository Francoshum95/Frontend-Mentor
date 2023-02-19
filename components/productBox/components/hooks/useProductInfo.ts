import { useState } from "react";
import type { productType } from "@components/productBox/type";
import { INCREASE, DECREASE } from "@components/productBox/constant";
import type { useProductinfoProps } from "../ProductInfo";

type onChangeProductQuantityType = (
  direction: typeof INCREASE | typeof DECREASE
) => void;

const defaultQuantity = 0;

const useProductInfo = ({
  productImage,
  productName,
  originalPrice,
  markdownPrice,
  maxQuantity=9999999,
}:useProductinfoProps) => {
  const [shoppingProduct, setShoppingProduct] = useState<productType>({
    productImage,
    productName,
    originalPrice,
    markdownPrice,
    productQuantity: defaultQuantity
  });

  const isMin = shoppingProduct.productQuantity === defaultQuantity;
  const isMax = shoppingProduct.productQuantity === maxQuantity;

  const onChangeProductQuantity: onChangeProductQuantityType = (
    direction
  ) => {
    const cloneShoppingProduct = { ... shoppingProduct };

    if (direction === INCREASE && !isMax){
      cloneShoppingProduct.productQuantity += 1;
    } else if (direction === DECREASE && !isMin){
      cloneShoppingProduct.productQuantity -= 1;
    }

    setShoppingProduct(cloneShoppingProduct)

  };

  return {
    isMin,
    isMax,
    shoppingProduct,
    onChangeProductQuantity
  }
};

export default useProductInfo;
