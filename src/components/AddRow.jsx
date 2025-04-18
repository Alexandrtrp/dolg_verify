import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addRow } from "../service/getData";

export const AddRow = () => {
  const dispatch = useDispatch();
  const handleAddRow = () => dispatch(addRow);
  return (
    <Button onClick={handleAddRow} variant="contained" sx={{ mb: 2 }}>
      Добавить строку
    </Button>
  );
};
