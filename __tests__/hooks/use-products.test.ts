import { renderHook } from "@testing-library/react";
import useSWR from "swr";
import { mockProducts } from "../../mock-data";
import { useProducts } from "@/hooks/use-product";

jest.mock("swr");

describe("useProducts Hook", () => {
  test("isLoading true when data is not available", () => {
    (useSWR as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    });

    const { result } = renderHook(() => useProducts());

    expect(result.current.isLoading).toBe(true);
    expect(result.current.products).toEqual([]);
    expect(result.current.isError).toBeNull();
  });

  test("return the product when api response is successful", () => {
    (useSWR as jest.Mock).mockReturnValue({
      data: mockProducts,
      isLoading: false,
      error: null,
    });

    const { result } = renderHook(() => useProducts());

    expect(result.current.isLoading).toBe(false);
    expect(result.current.products).toEqual(mockProducts);
    expect(result.current.isError).toBeNull();
  });

  test("isError true when the api fails", () => {
    (useSWR as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      error: new Error("Fetch failed"),
    });

    const { result } = renderHook(() => useProducts());

    expect(result.current.isLoading).toBe(false);
    expect(result.current.products).toEqual([]);
    expect(result.current.isError).toBeInstanceOf(Error);
  });
});
