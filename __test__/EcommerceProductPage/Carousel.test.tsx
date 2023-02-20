import "@testing-library/jest-dom";
import {
  render,
  screen,
  fireEvent,
} from "@testing-library/react";
import { productImages, productThumbnail } from "@pages/EcommerceProductPage";
import Carousel from "@components/productBox/components/ProductCarousel/Carousel";


describe("<Carousel/>", () => {
  beforeEach(() => {
    render(
    <Carousel 
      isMobile={false}
      productImages={productImages}
      productThumbnail={productThumbnail}
      onClickModal={jest.fn()}
    />)
  })

  it ("should should not move to prev image if it is first position", () => {
    expect(screen.getByRole("carousel-prev")).toHaveAttribute("disabled");

  });

  it ("should should not move to next image if it is last position", () => {
    fireEvent.click(screen.getByRole("carousel-next"))
    fireEvent.click(screen.getByRole("carousel-next"))
    fireEvent.click(screen.getByRole("carousel-next"))

    expect(screen.getByRole("carousel-next")).toHaveAttribute("disabled");

  });



});
