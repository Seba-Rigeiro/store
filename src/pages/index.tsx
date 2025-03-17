import { Container, Grid } from "@mui/material";
import { ProductCard } from "@/components/product-card";
import { SearchBar } from "@/components/search-bar";
import { Loader } from "@/components/common/loader";
import { useCart } from "@/context/cart-context";
import { Product } from "@/models/product";
import { useRouter } from "next/router";
import { useProducts } from "@/hooks/use-product";
import { useSearch } from "@/hooks/use-search";
import { EmptyError } from "@/components/common/empty-error";

const Home = () => {
  const { products, isLoading, isError } = useProducts();
  const { textSearch, filteredProducts, handleOnChangeTextSearch } =
    useSearch(products);
  const { addToCart } = useCart();
  const router = useRouter();

  if (isLoading) return <Loader />;
  if (isError) return <EmptyError />;

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
