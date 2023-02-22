import "@testing-library/jest-dom";
import { act, renderHook } from '@testing-library/react'
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

    expect(result.current.quantity).toBe(1);


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
      result.current.setQuantity(mockProduct.maxQuantity)
    })

    rerender()

    act(() => {
      result.current.onChangeProductQuantity(INCREASE)    
    })

    expect(result.current.quantity).toBe(mockProduct.maxQuantity);
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
      result.current.quantity = 1
    })

    rerender()

    act(() => {
      result.current.onChangeProductQuantity(DECREASE)    
    })

    expect(result.current.quantity).toBe(0);

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

    expect(result.current.quantity).toBe(0);

  })




  
});