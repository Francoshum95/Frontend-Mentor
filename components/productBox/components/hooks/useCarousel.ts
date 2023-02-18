import { useCallback, useState } from 'react';
import { PREV, NEXT } from '../../constant';
import type { productImagesType } from '@components/productBox/type';

export type imagePostionType = number;
export type onChangeImagePositionType = ({
  position,
  direction
}: {
  position?: number,
  direction: typeof PREV | typeof NEXT | false
}) => void;

type props = {
  productImages: productImagesType
}

const defaultPosition = 0;
const useCarousel = ({
  productImages
}: props) => {
  const [imagePostion, setImagePosition] = useState<imagePostionType>(defaultPosition)
  const isFirstPosition = imagePostion === defaultPosition;
  const isLastPosition = imagePostion === productImages.length -1;
  
  const onChangeImagePosition:onChangeImagePositionType =  ({
    position=0,
    direction
  }) => {

    if (direction){
      if (direction === PREV && !isFirstPosition){
        setImagePosition(prevState => prevState - 1)
      } else if (direction === NEXT && !isLastPosition){
        setImagePosition(prevState => prevState +1)
      }
    } else {
      setImagePosition(position)
    }
  
  }

  return {
    isFirstPosition,
    isLastPosition,
    imagePostion,
    onChangeImagePosition
  }

};


export default useCarousel