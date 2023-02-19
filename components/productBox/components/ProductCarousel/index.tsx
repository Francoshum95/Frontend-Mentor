import { productImagesType, productThumbnailType } from '@components/productBox/type';
import { useState, useEffect } from 'react';
import Carousel from './Carousel';
import Modal from './Modal';

export type isModalOpenType = boolean
export type onClickModalType = () => void;
export type isMobileType = boolean

type props = {
  productImages: productImagesType
  productThumbnail: productThumbnailType
}

const ProductCarousel = ({
  productImages,
  productThumbnail
}:props) => {
  const [isModalOpen, setIsModalOpen] = useState<isModalOpenType>(false);
  const [isMobile, setIsMobile] = useState<isMobileType>(false);

  const handleWindowsChagneModal = () => {
    if (window.innerWidth < 767) {
      setIsMobile(true)
      setIsModalOpen(false)
    } else {
      setIsMobile(false)
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowsChagneModal);
    return () => {
        window.removeEventListener('resize', handleWindowsChagneModal);
    };
  }, []);

  const onClickModal:onClickModalType = () => {
    setIsModalOpen(prevState => !prevState)
  };

  return (
    <>
      <Carousel
        isMobile={isMobile}
        productImages={productImages}
        productThumbnail={productThumbnail}
        onClickModal={onClickModal}
      />
      <Modal
        isModalOpen={isModalOpen}
        productImages={productImages}
        productThumbnail={productThumbnail}
        onClickModal={onClickModal}
      />
    </>
  )

};

export default ProductCarousel;