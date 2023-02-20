import "@testing-library/jest-dom";
import { act, fireEvent, render, renderHook, screen, waitFor } from '@testing-library/react'
import { CartContext } from "@components/productBox/CartContext";
import ProductInfo from "@components/productBox/components/ProductInfo";
import useProductInfo from "@components/productBox/components/hooks/useProductInfo";
import { DECREASE, INCREASE } from "@components/productBox/constant";

const mockProduct = {
  productImage: "",
  productBrand: "test",
  productName: "A",
  productDes: "test 123 321",
  originalPrice: 100,
  discointTag: "test",
  markdownPrice: 1243,
  maxQuantity: 10
}


describe("<ProductInfo/>", () => {
  it ("should able to add quantity", () => {
    const { result} = renderHook(() => useProductInfo({
      productImage: mockProduct.productImage,
      productName: mockProduct.productBrand,
      originalPrice: mockProduct.originalPrice,
      markdownPrice: mockProduct.markdownPrice,
      maxQuantity: mockProduct.maxQuantity
    }))

    act(() => {
      result.current.onChangeProductQuantity(INCREASE)
    })

    waitFor(() => result.current.shoppingProduct.productQuantity)

    expect(result.current.shoppingProduct.productQuantity).toBe(1);


  });

  it ("should not change the quantity when isMax", async() => {
    const { result, rerender} = renderHook(() => useProductInfo({
      productImage: mockProduct.productImage,
      productName: mockProduct.productBrand,
      originalPrice: mockProduct.originalPrice,
      markdownPrice: mockProduct.markdownPrice,
      maxQuantity: mockProduct.maxQuantity
    }))

    act(() => {
      result.current.shoppingProduct.productQuantity = mockProduct.maxQuantity;
    })

    rerender()

    act(() => {
      result.current.onChangeProductQuantity(INCREASE)    
    })

    expect(result.current.shoppingProduct.productQuantity).toBe(mockProduct.maxQuantity);

  });

  it ("should decrease the quantity ", () => {
    const { result, rerender} = renderHook(() => useProductInfo({
      productImage: mockProduct.productImage,
      productName: mockProduct.productBrand,
      originalPrice: mockProduct.originalPrice,
      markdownPrice: mockProduct.markdownPrice,
      maxQuantity: mockProduct.maxQuantity
    }))

    act(() => {
      result.current.shoppingProduct.productQuantity = 1
    })

    rerender()

    act(() => {
      result.current.onChangeProductQuantity(DECREASE)    
    })

    expect(result.current.shoppingProduct.productQuantity).toBe(0);

  })

  it ("should not decrease the quantity when isMin", () => {
    const { result, rerender} = renderHook(() => useProductInfo({
      productImage: mockProduct.productImage,
      productName: mockProduct.productBrand,
      originalPrice: mockProduct.originalPrice,
      markdownPrice: mockProduct.markdownPrice,
      maxQuantity: mockProduct.maxQuantity
    }))

    act(() => {
      result.current.onChangeProductQuantity(DECREASE)    
    })

    expect(result.current.shoppingProduct.productQuantity).toBe(0);

  })




  
});