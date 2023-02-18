import { productImagesType, productThumbnailType } from '@components/productBox/type';
import { useState, useEffect } from 'react';
import Carousel from './Carousel';
import Modal from './Modal';

export type isModalOpenType = boolean;
export type onClickModalType = () => void;

type props = {
  productImages: productImagesType
  productThumbnail: productThumbnailType
}

const ProductCarousel = ({
  productImages,
  productThumbnail
}:props) => {
  const [isModalOpen, setIsModalOpen] = useState<isModalOpenType>(false);

  const handleWindowsChagneModal = () => {
    if (window.innerWidth < 767) {
      setIsModalOpen(false)
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
        isModalOpen={isModalOpen}
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