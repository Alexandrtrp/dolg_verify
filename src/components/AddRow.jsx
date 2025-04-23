import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addRow } from "../service/getData";

export const AddRow = () => {
  const dispatch = useDispatch();
  return (
    <Button onClick={() => dispatch(addRow())} variant="contained" sx={{ backgroundColor: '#1976d2' }}>
      Добавить строку
    </Button>
  );
};
