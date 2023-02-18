import useCarousel from "../hooks/useCarousel";
import { NEXT, PREV } from "@components/productBox/constant";
import {
  productImagesType,
  productThumbnailType,
} from "@components/productBox/type";

type props = {
  productImages: productImagesType;
  productThumbnail: productThumbnailType;
};

const CarouselModal = ({ productImages, productThumbnail }: props) => {
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
        <div className="overflow-hidden md:rounded-lg cursor-pointer">
          <img
            src={productImages[imagePostion]}
            className="w-full max-h-[28rem]  object-contain"
          />
        </div>
        <div
          className={`justify-between mobile:absolute flex items-center 
        top-1/2 translate-x-[-5%] translate-y-[-50%] w-[110%] absolute`}
        >
          <button
            disabled={isFirstPosition}
            className={` ${isFirstPosition && "opacity-50"}
              bg-white rounded-full p-2 text-black hover-effect hover:text-orange`}
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
            className={`${isLastPosition && "opacity-50"} 
            bg-white rounded-full p-2 text-black hover-effect hover:text-orange`}
            disabled={isLastPosition}
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
      <div className="mt-6 mobile:hidden gap-7 w-full flex justify-center max-w-[90%] mx-auto">
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

export default CarouselModal;
