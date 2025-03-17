import { useSearch } from "@/hooks/use-search";
import { renderHook, act } from "@testing-library/react";
import { mockProducts } from "../../mock-data";

test("filter products returns filtered products by text", () => {
  const { result } = renderHook(() => useSearch(mockProducts));

  expect(result.current.filteredProducts).toHaveLength(3);

  act(() => {
    result.current.handleOnChangeTextSearch("lap");
  });

  expect(result.current.filteredProducts).toEqual([
    {
      id: "1",
      title: "Laptop",
      price: 10,
      image: "https://example.com/product.jpg",
      description: "Test description",
      rating: { rate: 10, count: 20 },
    },
  ]);
});
