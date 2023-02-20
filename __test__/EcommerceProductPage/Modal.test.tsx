import "@testing-library/jest-dom";
import { fireEvent, getByTestId, render, screen } from '@testing-library/react'
import { ProductCarousel } from "@components/index";
import { productImages, productThumbnail } from "@pages/EcommerceProductPage";

describe("<ProductCarousel/>", () => {
  beforeEach(() => {
    render(<ProductCarousel
      productImages={productImages}
      productThumbnail={productThumbnail}
    />)
  })

  it ("should open modal", () => {
    fireEvent.click(screen.getByTestId("open-modal-image"));

    expect(screen.getByTestId('modal-true')).toBeInTheDocument()

  });

  it ("should close modal from the background", () => {
    fireEvent.click(screen.getByTestId("open-modal-image"));
    expect(screen.getByTestId('modal-true')).toBeInTheDocument()
    fireEvent.click(screen.getByTestId("modal-close"));

    expect(screen.getByTestId('modal-false')).toBeInTheDocument()

  });

  it ("should not close modal in the modal", () => {
    fireEvent.click(screen.getByTestId("open-modal-image"));
    expect(screen.getByTestId('modal-true')).toBeInTheDocument()
    fireEvent.click(screen.getByTestId("modal-body"));

    expect(screen.getByTestId('modal-true')).toBeInTheDocument()

  });

  it ("should not close modal from close button", () => {
    fireEvent.click(screen.getByTestId("open-modal-image"));
    expect(screen.getByTestId('modal-true')).toBeInTheDocument()
    fireEvent.click(screen.getByRole("close-modal"));

    expect(screen.getByTestId('modal-false')).toBeInTheDocument()

  });





});