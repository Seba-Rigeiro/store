import { CartSection } from "@/components/cart-section";
import { EmptyState } from "@/components/common/empty-state";
import { useCart } from "@/context/cart-context";
import { Container } from "@mui/material";
import Image from "next/image";

const CartPage = () => {
  const { cart } = useCart();

  return (
    <Container>
      {cart.length === 0 ? (
        <EmptyState
          title="Tu carrito de compras esta vacio"
          description="Agrega productos para comprar"
          image={
            <Image
              width={300}
              height={300}
              src="/empty-cart.png"
              alt="Carrito"
            />
          }
        />
      ) : (
        <CartSection cart={cart} />
      )}
    </Container>
  );
};
export default CartPage;
