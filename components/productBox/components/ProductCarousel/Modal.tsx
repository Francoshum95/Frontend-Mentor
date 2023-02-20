import {
  productImagesType,
  productThumbnailType,
} from "@components/productBox/type";
import { isModalOpenType, onClickModalType } from ".";
import CarouselModal from "./CarouselModal";

type props = {
  isModalOpen: isModalOpenType;
  onClickModal: onClickModalType;
  productImages: productImagesType;
  productThumbnail: productThumbnailType;
};

const Modal = ({
  isModalOpen,
  productImages,
  productThumbnail,
  onClickModal,
}: props) => {
  return (
    <div
      data-testid={`modal-${isModalOpen}`}
    >
      {isModalOpen && (
        <div
        data-testid={`modal-close`}
        className="fixed inset-0 bg-very-dark-blue bg-opacity-80 transition-opacity z-10"
          onClick={() => onClickModal()}
        >
          <div
            data-testid={'modal-body'}
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="flex justify-end py-5">
              <button
                role="close-modal"
                className="text-white hover-effect hover:text-orange"
                onClick={() => onClickModal()}
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <CarouselModal
              productImages={productImages}
              productThumbnail={productThumbnail}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
