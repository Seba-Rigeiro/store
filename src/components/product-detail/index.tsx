import { Product } from "@/models/product";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import router from "next/router";
import { FC } from "react";

interface ProductDetailProps {
  product: Product;
}

export const ProductDetail: FC<ProductDetailProps> = ({ product }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <Typography variant="h4" align="center">
        {product?.title}
      </Typography>
      <Image
        src={product?.image ?? ""}
        alt={product?.title ?? ""}
        width="300"
        height="300"
      />
      <Box mt={2}>
        <Typography variant="h6">${product?.price}</Typography>
      </Box>

      <Typography sx={{ mt: 3, textAlign: "justify" }}>
        {product?.description}
      </Typography>

      <Button
        variant="contained"
        sx={{ mt: 3 }}
        onClick={() => router.push("/")}
      >
        Volver
      </Button>
    </Box>
  );
};
