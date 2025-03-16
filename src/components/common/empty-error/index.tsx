import { Box } from "@mui/material";
import { EmptyState } from "../empty-state";
import Image from "next/image";

export const EmptyError = () => {
  return (
    <Box mt="150px">
      <EmptyState
        title="Ha ocurrido un error"
        description="Vuelve a intentarlo"
        image={<Image width={300} height={300} src="/404.jpg" alt="Error" />}
      />
    </Box>
  );
};
