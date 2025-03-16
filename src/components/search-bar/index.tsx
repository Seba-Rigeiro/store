import { TextField } from "@mui/material";
import { FC } from "react";

interface SearchBarProps {
  textSearch: string;
  onChangeTextSearch: (value: string) => void;
}

export const SearchBar: FC<SearchBarProps> = ({
  textSearch,
  onChangeTextSearch,
}) => {
  return (
    <TextField
      fullWidth
      label="search products"
      variant="outlined"
      margin="normal"
      value={textSearch}
      onChange={(e) => onChangeTextSearch(e.target.value)}
    />
  );
};
