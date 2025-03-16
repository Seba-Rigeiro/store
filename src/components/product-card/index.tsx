import { Product } from "@/models/product";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { FC } from "react";
import StarIcon from "@mui/icons-material/Star";

interface ProductCardProps {
  product: Product;
  onClickRedirect: (id: string) => void;
  onClickAddToCart: (product: Product) => void;
}

export const ProductCard: FC<ProductCardProps> = ({
  product,
  onClickRedirect,
  onClickAddToCart,
}) => {
  return (
    <Card sx={{ padding: 2, boxShadow: 3, borderRadius: 2 }}>
      <CardMedia
        component="img"
        height="180"
        image={product.image}
        alt={product.title}
        style={{ objectFit: "contain", padding: 2 }}
      />
      <CardContent>
        <Box display="flex" justifyContent="space-between" mb={1}>
          <Typography variant="h6" fontWeight="bold">
            ${product.price}
          </Typography>
          <Box display="flex" alignItems="center" mb={1}>
            <StarIcon style={{ color: "#FFD700", fontSize: 18 }} />
            <Typography variant="body2" ml={0.5}>
              {product.rating.rate}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              ({product.rating.count})
            </Typography>
          </Box>
        </Box>
        <Typography variant="body2" color="textSecondary" noWrap>
          {product.title}
        </Typography>
        <Box mt={2} display="flex" justifyContent="space-between">
          <Button
            variant="outlined"
            size="small"
            onClick={() => onClickRedirect(product.id)}
          >
            + more
          </Button>
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={() => onClickAddToCart(product)}
          >
            Add to cart
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
