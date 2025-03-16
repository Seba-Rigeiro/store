import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { CartProduct } from "@/models/cart-product";
import { useCart } from "@/context/cart-context";

interface CartSectionProps {
  cart: CartProduct[];
}

export const CartSection: FC<CartSectionProps> = () => {
  const { cart } = useCart();

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Carrito de Compras
      </Typography>

      <List>
        {cart.map((product) => (
          <ListItem key={product.id}>
            <ListItemAvatar>
              <Avatar src={product.image} />
            </ListItemAvatar>
            <ListItemText
              primary={product.title}
              secondary={`Cantidad: ${product.quantity} - $${product.price}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
