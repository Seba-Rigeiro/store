import { useRouter } from "next/router";
import { Container } from "@mui/material";
import { Loader } from "@/components/common/loader";
import { useProductDetail } from "@/hooks/use-product-detail";
import { EmptyError } from "@/components/common/empty-error";
import { ProductDetail } from "@/components/product-detail";

const ProductDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { product, isLoading, isError } = useProductDetail(id as string);

  if (isLoading) return <Loader />;

  if (isError || !product) return <EmptyError />;

  return (
    <Container>
      <ProductDetail product={product} />
    </Container>
  );
};
export default ProductDetailPage;
