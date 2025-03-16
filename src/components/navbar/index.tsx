import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Badge,
  Button,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useCart } from "@/context/cart-context";
import { useRouter } from "next/router";

export const NavBar = () => {
  const router = useRouter();
  const { getTotalItems } = useCart();

  return (
    <AppBar
      position="static"
      elevation={1}
      style={{ backgroundColor: "white", color: "black" }}
    >
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center">
          <Typography variant="h6" ml={1} fontWeight="bold">
            Off Shore Clothing
          </Typography>
        </Box>
        <Box display="flex" gap={4}>
          <Button onClick={() => router.push("/")}>Home</Button>
          <Button>Boutique</Button>
          <Button>Our stores</Button>
          <Button>Contact</Button>
        </Box>
        <IconButton onClick={() => router.push("/cart")}>
          <Badge badgeContent={getTotalItems()} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
