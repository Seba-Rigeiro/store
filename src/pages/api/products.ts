// import { Product } from "@/models/product";
// import useSWR from "swr";

// const API_URL = "https://fakestoreapi.com/products";

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

// export function useProducts() {
//   const { data, isLoading, error } = useSWR<Product[]>(API_URL, fetcher);

//   return {
//     products: data || [],
//     isLoading,
//     isError: error,
//   };
// }

// // export const useProductDetail = (id: string) => {
// //   const { data, isLoading, error } = useSWR<Product>(
// //     `${API_URL}/${id}`,
// //     fetcher
// //   );

// //   return {
// //     product: data,
// //     isLoading,
// //     isError: error,
// //   };
// // };
