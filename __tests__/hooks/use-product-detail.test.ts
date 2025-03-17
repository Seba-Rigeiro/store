import { useProductDetail } from "@/hooks/use-product-detail";
import { renderHook } from "@testing-library/react";
import useSWR from "swr";
import { mockProducts } from "../../mock-data";

jest.mock("swr");

const MOCK_PRODUCT = mockProducts[0];

describe("useProductDetail Hook", () => {
  test("isLoading true when data is not available", () => {
    (useSWR as jest.Mock).mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    });

    const { result } = renderHook(() => useProductDetail("1"));

    expect(result.current.isLoading).toBe(true);
    expect(result.current.product).toBeNull();
    expect(result.current.isError).toBeNull();
  });

  test("return the product when api response is successful", () => {
    (useSWR as jest.Mock).mockReturnValue({
      data: MOCK_PRODUCT,
      isLoading: false,
      error: null,
    });

    const { result } = renderHook(() => useProductDetail("1"));

    expect(result.current.isLoading).toBe(false);
    expect(result.current.product).toEqual(MOCK_PRODUCT);
    expect(result.current.isError).toBeNull();
  });

  test("isError true when the api fails", () => {
    (useSWR as jest.Mock).mockReturnValue({
      data: null,
      isLoading: false,
      error: new Error("Fetch failed"),
    });

    const { result } = renderHook(() => useProductDetail("1"));

    expect(result.current.isLoading).toBe(false);
    expect(result.current.product).toBeNull();
    expect(result.current.isError).toBeInstanceOf(Error);
  });
});
