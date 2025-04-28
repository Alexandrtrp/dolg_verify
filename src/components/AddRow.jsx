import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addRow } from "../service/getData";
import { useState } from "react";

export const AddRow = () => {
  const dispatch = useDispatch();
  const [caseNumber, setCaseNumber] = useState("");
  const [inn, setInn] = useState("");
  const [isBasic, setIsBasic] = useState(false);

  const [selectVisible, setSelectVisible] = useState(false);

  const innValid = inn?.length === 10 || inn?.length === 12 ? true : false;
  const selectValid = caseNumber ? true : false;

  const closeSelectRow = () => {
    setSelectVisible(false);
    setCaseNumber("");
    setInn();
    setIsBasic(false);
  };

  return (
    <Box sx={{ display: "flex", gap: "40px", alignItems: "center" }}>
      <Button
        onClick={() => dispatch(addRow())}
        variant="contained"
        sx={{ backgroundColor: "#1976d2" }}
      >
        Добавить иск
      </Button>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          border: selectVisible ? "3px solid #1976d2" : "none",
          borderRadius: "15px",
          padding: selectVisible ? "20px" : "initial",
          transition: "all 0.25s linear",
        }}
      >
        {selectVisible ? (
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              onClick={closeSelectRow}
              variant="contained"
              sx={{ backgroundColor: "#1976d2" }}
              disabled={!(innValid && selectValid)}
            >
              Сохранить
            </Button>
            <Button
              onClick={closeSelectRow}
              variant="contained"
              sx={{ backgroundColor: "#1976d2" }}
            >
              Закрыть
            </Button>
          </Box>
        ) : (
          <Button
            onClick={() => setSelectVisible(true)}
            variant="contained"
            sx={{ backgroundColor: "#1976d2" }}
          >
            Добавить ответчика
          </Button>
        )}
        {selectVisible && (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Номер дела</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={caseNumber}
                label="Номер дела"
                onChange={(event) => setCaseNumber(event.target.value)}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <TextField
              onChange={(e) => setInn(e.target.value)}
              id="outlined-basic"
              label="ИНН ответчика"
              variant="outlined"
              type="number"
              value={inn}
              helperText={innValid ? "" : "Неверный ИНН"}
            />
            <FormControlLabel
              onChange={(event) => setIsBasic(event.target.value)}
              control={<Checkbox />}
              label="Основной ответчик"
            />
          </Box>
        )}
      </Box>
    </Box>
  );
};
