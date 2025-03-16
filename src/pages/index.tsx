import { useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { ProductCard } from "@/components/product-card";
import { SearchBar } from "@/components/search-bar";
import { Loader } from "@/components/common/loader";
import { useCart } from "@/context/cart-context";
import { Product } from "@/models/product";
import { useRouter } from "next/router";
import { useProducts } from "@/hooks/use-product";

const Home = () => {
  const { products, isLoading, isError } = useProducts();
  const { addToCart } = useCart();
  const router = useRouter();

  const [textSearch, setTextSearch] = useState("");

  if (isLoading) return <Loader />;
  if (isError) return <Typography>Error al cargar productos</Typography>;

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(textSearch.toLowerCase())
  );
  const handleOnChangeTextSearch = (text: string) => {
    setTextSearch(text);
  };

  const handleGoToProductDetail = (productId: string) => {
    router.push(`/product/${productId}`);
  };

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  return (
    <Container>
      <SearchBar
        textSearch={textSearch}
        onChangeTextSearch={handleOnChangeTextSearch}
      />
      <Grid container spacing={3}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard
              product={product}
              onClickRedirect={handleGoToProductDetail}
              onClickAddToCart={handleAddToCart}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default Home;
