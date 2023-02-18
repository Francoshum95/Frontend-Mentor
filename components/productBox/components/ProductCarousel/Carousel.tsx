import useCarousel from "../hooks/useCarousel";
import type { productImagesType, productThumbnailType } from "../../type";
import { isModalOpenType, onClickModalType } from ".";
import { NEXT, PREV } from "@components/productBox/constant";

export type imagePostionType = number;
type props = {
  isModalOpen: isModalOpenType;
  productImages: productImagesType;
  productThumbnail: productThumbnailType;
  onClickModal: onClickModalType;
};

const Carousel = ({
  isModalOpen,
  productImages,
  productThumbnail,
  onClickModal,
}: props) => {
  const {
    isFirstPosition,
    isLastPosition,
    imagePostion,
    onChangeImagePosition,
  } = useCarousel({
    productImages,
  });

  return (
    <>
      <div className="relative">
        <div
          className="overflow-hidden md:rounded-lg cursor-pointer "
          onClick={() => onClickModal()}
        >
          <img
            src={productImages[imagePostion]}
            className="w-full md:max-h-[26rem] mobile:max-h-[20rem] object-contain"
          />
        </div>
        <div
          className={`md:hidden justify-between mobile:absolute flex items-center top-1/2 md:translate-x-[-5%]
            mobile:w-[90%] translate-y-[-50%] mobile:translate-x-[5%]`}
        >
          <button
            disabled={isFirstPosition}
            className={`${isFirstPosition && "opacity-50"} 
          bg-white rounded-full p-2 text-black hover-effec`}
            onClick={() =>
              onChangeImagePosition({
                direction: PREV,
              })
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mobile:w-5 mobile:h-5 md:w-6 md:h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            disabled={isLastPosition}
            className={`${isLastPosition && "opacity-50"} 
          bg-white rounded-full p-2 text-black hover-effec`}
            onClick={() =>
              onChangeImagePosition({
                direction: NEXT,
              })
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="mobile:w-5 mobile:h-5 md:w-6 md:h-6 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="mt-6 mobile:hidden gap-7 w-full flex justify-center">
        {productThumbnail.map((item, index) => (
          <div
            key={index}
            className={`${
              imagePostion === index && "border-orange"
            } border-2 rounded-lg cursor-pointer overflow-hidden`}
            onClick={() =>
              onChangeImagePosition({
                position: index,
                direction: false,
              })
            }
          >
            <img
              className={`${
                imagePostion === index && "opacity-30"
              } w-20 max-h-20 object-contain`}
              src={item}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Carousel;
