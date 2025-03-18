import {
  Avatar,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { CartProduct } from "@/models/cart-product";
import { useCart } from "@/context/cart-context";
import DeleteIcon from "@mui/icons-material/Delete";

interface CartSectionProps {
  cart: CartProduct[];
}

export const CartSection: FC<CartSectionProps> = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <Box>
      <Box my={2} justifyItems="center">
        <Typography variant="h4">Carrito de Compras</Typography>
      </Box>
      <List>
        {cart.map((product) => (
          <ListItem key={product.id}>
            <ListItemAvatar>
              <Avatar src={product.image} />
            </ListItemAvatar>
            <ListItemText
              primary={
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Typography variant="body1">{product.title}</Typography>
                  <IconButton onClick={() => removeFromCart(product.id)}>
                    <DeleteIcon />
                  </IconButton>
                </Box>
              }
              secondary={`Cantidad: ${product.quantity} - $${product.price}`}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
