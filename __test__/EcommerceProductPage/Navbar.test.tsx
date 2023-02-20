import "@testing-library/jest-dom";
import { CartContext } from "@components/productBox/CartContext";
import { Navbar } from "@components/index";
import { render } from '@testing-library/react'
import {fireEvent, screen} from '@testing-library/dom'
import { navbarMenuItems, navbarBrandIcon, userImage } from "@pages/EcommerceProductPage";

const navbarProps = {
  navbarMenuItems, navbarBrandIcon, userImage 
}


describe("<Narbar/>", () => {
  beforeEach(() => render(
    <CartContext>
      <Navbar
        {...navbarProps}
      />
    </CartContext>
  ))

  it ("should open toggle", () => {
    expect(screen.getByTestId("toggle-false")).toBeTruthy()
    fireEvent.click(screen.getByTestId("toggle-button"));
    expect(screen.getByTestId("toggle-true")).toBeTruthy()
  })

  it ("should toggle", () => {
    expect(screen.getByTestId("toggle-false")).toBeTruthy()
    fireEvent.click(screen.getByTestId("toggle-button"));
    expect(screen.getByTestId("toggle-true")).toBeTruthy()
    fireEvent.click(screen.getByTestId("toggle-button"));
    expect(screen.getByTestId("toggle-false")).toBeTruthy()

  });



});