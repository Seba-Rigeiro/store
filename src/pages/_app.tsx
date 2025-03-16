import { NavBar } from "@/components/navbar";
import { CartProvider } from "@/context/cart-context";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <CartProvider>
        <NavBar />
        <Component {...pageProps} />;
      </CartProvider>
    </>
  );
}
