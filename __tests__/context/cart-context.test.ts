import { renderHook, act } from "@testing-library/react";
import { CartProvider, useCart } from "@/context/cart-context";
import { mockProducts } from "../../mock-data";

test("add product to cart", () => {
  const { result } = renderHook(() => useCart(), { wrapper: CartProvider });
  const mockProduct = mockProducts[0];

  act(() => {
    result.current.addToCart(mockProduct);
  });

  expect(result.current.cart).toHaveLength(1);
});
