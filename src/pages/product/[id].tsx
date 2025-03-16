import { useRouter } from "next/router";
import { Container, Typography, Button } from "@mui/material";
import Image from "next/image";
import { Loader } from "@/components/common/loader";
import { useProductDetail } from "@/hooks/use-product-detail";
import { EmptyError } from "@/components/common/empty-error";

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const { product, isLoading, isError } = useProductDetail(id as string);

  if (isLoading) return <Loader />;

  if (isError) return <EmptyError />;

  return (
    <Container>
      <Typography variant="h4">{product?.title}</Typography>
      <Image
        src={product?.image ?? ""}
        alt={product?.title ?? ""}
        width="300"
        height="300"
      />
      <Typography variant="h6">${product?.price}</Typography>
      <Typography>{product?.description}</Typography>
      <Button variant="contained" onClick={() => router.push("/")}>
        Volver
      </Button>
    </Container>
  );
};
export default ProductDetail;
