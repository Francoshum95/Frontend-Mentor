import { useContext } from "react";
import { CartCtx } from "../CartContext";

const Cart = () => {
  const { checkoutItem, onRemoveProduct } = useContext(CartCtx);

  return (
    <button className="group/item hover:visible hover-effect">
      <div className="relative">
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
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
        {
          checkoutItem.length > 0 && (
            <div className="absolute py-[.1rem] px-2 bg-orange top-0 right-0 rounded-full">
              <div className="text-[.4rem] text-white">{checkoutItem.length}</div>
            </div>
          )
        }
      </div>
      <div
        className="absolute mobile:w-full 
      md:w-[20rem] min-h-[15rem] md:top-[4.5rem] md:right-[4rem] hover:visible 
      group/edit group-hover/item:visible mobile:pt-[4.5rem] 
      p-3 cursor-default invisible mobile:z-20 mobile:left-0 mobile:top-[1rem]"
      >
        <div
          className="shadow-lg z-20 w-full min-h-[15rem] bg-white rounded-lg mobile:w-[95%]
        mobile:max-w-[30rem] mobile:translate-x-[-50%] mobile:left-[50%] absolute">
          <div className="border-b-[1px] light-graylish-blue border-light-graylish-blue p-5">
            <h2 className="text-black font-semibold text-left">Cart</h2>
          </div>
          <div className="p-5">
            {checkoutItem.length > 0 ? (
              checkoutItem.map((item) => (
                <div className="flex items-center" key={item.productName}>
                  <div>
                    <img
                      src={item.productImage}
                      className="w-[2.5rem] h-[2.5rem] object-contain rounded-md"
                    />
                  </div>
                  <div className="ml-1">
                    <div className="text-grayish-blue text-left">
                      {item.productName}
                    </div>
                    <div className="text-left">
                      <span className="text-grayish-blue">
                        ${item.markdownPrice.toFixed(2)}
                      </span>
                      <span className="text-grayish-blue">
                        {" "}
                        x {item.productQuantity}
                      </span>
                      <span className="text-black font-bold ml-1">
                        $
                        {(item.markdownPrice * item.productQuantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <div 
                    onClick={() => onRemoveProduct(item)}
                  className="ml-auto hover-effect hover:text-orange 
                  text-grayish-blue cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </div>
                </div>
              ))
            ) : (
              <span>Your cart is empty.</span>
            )}
          </div>
          <div className="p-5">
            <div
              className="hover-effect hover:opacity-30 pt-5 
            bg-orange rounded-md py-3 text-white w-full cursor-pointer"
            >
              <span className="font-bold">Checkout</span>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default Cart;
