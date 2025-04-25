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
import { useEffect, useState } from "react";
import { Numbers } from "@mui/icons-material";

export const AddRow = () => {
  const dispatch = useDispatch();
  const [caseNumber, setCaseNumber] = useState("");
  const [inn, setInn] = useState("");
  const [isBasic, setIsBasic] = useState(false);

  const [innValidation, setInnValidation] = useState(false);

  const [selectVisible, setSelectVisible] = useState(false);
  const [saveButtonVisible, setSaveButtonVisible] = useState(false);

  // const handleChange = (event) => {
  //   setCaseNumber(event.target.value);
  //   setSaveButtonVisible(true);
  // };

  const handleSaveSelectRow = () => {
    setSelectVisible(false);
    setSaveButtonVisible(false);
    setCaseNumber("");
    setInn();
    setIsBasic(false);
    setInnValidation(false);
  };

  const innHandler = (e) => {
    setInn(e.target.value);
    if ((inn.length + 1 === 10 || inn.length + 1 === 12) && Number.isFinite(+inn)) {
      setInnValidation(true);
    } else setInnValidation(false);
  };

  useEffect(() => {
    if (inn && caseNumber) {
      setSaveButtonVisible(true);
    }
  }, [inn, caseNumber]);

  return (
    <Box sx={{ display: "flex", gap: "40px" }}>
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
          padding: selectVisible && "20px",
        }}
      >
        {saveButtonVisible ? (
          <Button
            onClick={handleSaveSelectRow}
            variant="contained"
            sx={{ backgroundColor: "#1976d2" }}
          >
            Сохранить
          </Button>
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
              sx={{
                color: innValidation ? "currentcolor" : "#e53935",
              }}
              onChange={(e) => innHandler(e)}
              id="outlined-basic"
              label="ИНН ответчика"
              variant="outlined"
              value={inn}
              helperText={innValidation ? "" : "Неверный ИНН"}
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
