import { Product } from "@/models/product";
import { useState, useMemo } from "react";

export const useSearch = (products: Product[]) => {
  const [textSearch, setTextSearch] = useState("");

  const filteredProducts = useMemo(() => {
    return products.filter((product) =>
      product.title.toLowerCase().includes(textSearch.toLowerCase())
    );
  }, [textSearch, products]);

  const handleOnChangeTextSearch = (text: string) => {
    setTextSearch(text);
  };

  return { textSearch, filteredProducts, handleOnChangeTextSearch };
};
