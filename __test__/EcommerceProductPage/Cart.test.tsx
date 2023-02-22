import React from 'react';
import "@testing-library/jest-dom";
import { CartCtx, CartContext } from "@components/productBox/CartContext";
import { fireEvent, render, screen } from '@testing-library/react'

const mockQuantityA_one = 1;
const mockQuantityA_two = 3;
const mockQuantityA_three = 7;
const mockQuantityA_sum = mockQuantityA_one + mockQuantityA_two;
const mockQuantityB = 1;


const mockProductA_one = {
  productName: "A",
  productQuantity: mockQuantityA_one,
  originalPrice: 10,
  markdownPrice: 10,
  productImage: ""
};

const mockProductA_two = {
  productName: "A",
  productQuantity: mockQuantityA_two,
  originalPrice: 10,
  markdownPrice: 10,
  productImage: ""
};

const mockProductA_three = {
  productName: "A",
  productQuantity: mockQuantityA_three,
  originalPrice: 10,
  markdownPrice: 10,
  productImage: ""
};

const mockProductB = {
  productName: "B",
  productQuantity: mockQuantityB,
  originalPrice: 12,
  markdownPrice: 12,
  productImage: ""
};

describe ("<Cart>", () => {
  let addProduct = mockProductA_one;
  let removeProduct = mockProductA_one;
  const TestComponents = () => {
    const {checkoutItem, onAddCart, onRemoveProduct} = React.useContext(CartCtx)

    return (
      <div>
        <button role="add-item" onClick={() => onAddCart(addProduct)}/>
        <button role="remove-item" onClick={() => onRemoveProduct(removeProduct)}></button>
        <div data-testid="cart-items">
          {
            checkoutItem.map(item => (
              <div key={item.productName}>
                <span data-testid="quantity">{item.productQuantity}</span>
              </div>
            ))
          }
        </div>
      </div>
    )
  }

  beforeEach(() => render(
    <CartContext maxQuantity={10}>
      <TestComponents/>
    </CartContext>)
    )

  it ("is should add item to the cart", () => {
    fireEvent.click(screen.getByRole("add-item"))
    expect(screen.getByTestId("cart-items"))
  });

  it ("it should increase the amount of same product in the cart", () => {
    fireEvent.click(screen.getByRole("add-item"))
    expect(screen.getByTestId("cart-items").children.length).toBe(1)
    expect(screen.getByTestId('quantity')).toHaveTextContent(`${mockQuantityA_one}`)
    addProduct = mockProductA_two
    fireEvent.click(screen.getByRole("add-item"))
    expect(screen.getByTestId("cart-items").children.length).toBe(1)
    expect(screen.getByTestId('quantity')).toHaveTextContent(`${mockQuantityA_sum}`)
  });

  it ("it should two items in the cart", () => {
    fireEvent.click(screen.getByRole("add-item"))
    expect(screen.getByTestId("cart-items").children.length).toBe(1)
    addProduct = mockProductB
    fireEvent.click(screen.getByRole("add-item"))
    expect(screen.getByTestId("cart-items").children.length).toBe(2)
  });

  it("is should not add to cart", () => {
    fireEvent.click(screen.getByRole("add-item"))
    addProduct = mockProductA_two
    fireEvent.click(screen.getByRole("add-item"))
    addProduct = mockProductA_three;
    fireEvent.click(screen.getByRole("add-item"))

    expect(screen.getByTestId('quantity')).toHaveTextContent(`${mockQuantityA_sum}`)

  });

});


