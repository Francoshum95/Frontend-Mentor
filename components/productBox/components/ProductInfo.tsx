import { useContext } from "react";
import { CartCtx } from "../CartContext";
import useProductInfo from "./hooks/useProductInfo";
import { INCREASE, DECREASE } from "../constant";


export interface useProductinfoProps {
  productImage: string;
  productName: string;
  originalPrice: number;
  markdownPrice: number;
  maxQuantity?: number;
}

interface props extends useProductinfoProps {
  productBrand: string;
  productDes: string;
  discointTag?: string;
}

const ProductInfo = ({
  productImage,
  productBrand,
  productName,
  productDes,
  originalPrice,
  discointTag,
  markdownPrice,
  maxQuantity,
}: props) => {
  const [, onAddCart] = useContext(CartCtx);
  const { isMin, isMax, shoppingProduct, onChangeProductQuantity } =
    useProductInfo({
      productImage,
      productName,
      originalPrice,
      markdownPrice,
      maxQuantity,
    });
  
  return (
    <div className="">
      <h4 className="text-orange font-bold">{productBrand}</h4>
      <h1 className="text-black font-bold text-3xl">{productName}</h1>
      <p className="text-sm text-grayish-blue font-bold">{productDes}</p>
      <div className="flex md:flex-col mobile:justify-between">
        <div className="mt-3">
          <span className="text-black font-bold text-xl">
            ${markdownPrice.toFixed(2)}
          </span>
          <span className="rounded-md bg-aple-orange px-2 py-1 ml-3">
            <span className="font-bold text-orange text-center">
              {discointTag}
            </span>
          </span>
        </div>
        <span className="text-grayish-blue font-bold line-through text-sm">
          ${originalPrice.toFixed(2)}
        </span>
      </div>
      <div className="flex mobile:flex-col md:justify-between">
        <div
          className="mobile:w-full rounded-md bg-light-graylish-blue 
          px-3 py-3 flex justify-between md:w-[38%] select-none"
        >
          <button className={`${isMin && 'opacity-40'} text-orange font-bold`}
            disabled={isMin}
            onClick={() => onChangeProductQuantity(DECREASE)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
            </svg>
          </button>
          <span className="text-black font-bold">
            {shoppingProduct.productQuantity}
          </span>
          <button className={`${isMax && 'opacity-40'} text-orange font-bold`}
            disabled={isMax}
            onClick={() => onChangeProductQuantity(INCREASE)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
          </button>
        </div>
        <button
          onClick={() => onAddCart(shoppingProduct)}
          className="bg-orange rounded-md py-2 hover-effect 
          hover:opacity-30 text-white mobile:w-full md:w-[56%]
          flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <span className="font-bold ml-3">Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
