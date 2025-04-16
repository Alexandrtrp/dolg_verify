import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Button, Checkbox, Stack, TextField } from "@mui/material";
import { VerifyFilter } from "./VerifyFilter";

export const Filter = () => {
    
  const [radio, setRadio] = useState("");
  const handleChange = (event) => {
    setRadio(event.target.value);
  };
  const resetFilter = () => {
    setFilter("");
    setRadio("");
  };

  const sendFilter = () => {};
  const [filter, setFilter] = useState("");


  return (
    <div className="flex flex-col items-center">
    <div className="flex flex-col gap-6 m-12 w-min">
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Фильтр</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel
            onChange={(e) => handleChange(e)}
            value="inn-dolg"
            control={<Radio />}
            label="По ИНН должника"
          />
          <FormControlLabel
            onChange={(e) => handleChange(e)}
            value="inn-otv"
            control={<Radio />}
            label="По ИНН ответчика"
          />
          <FormControlLabel
            onChange={(e) => handleChange(e)}
            value="un"
            control={<Radio />}
            label="По УН иска"
          />
        </RadioGroup>
      </FormControl>
      <TextField
        className="w-xs"
        id="outlined-basic"
        label="Поле ввода"
        variant="outlined"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <Stack spacing={2} direction="row">
        <Button onClick={sendFilter} variant="contained">
          Применить фильтр
        </Button>
        <Button onClick={resetFilter} variant="outlined">
          Сбросить фильтр
        </Button>
      </Stack>
    </div>
    <VerifyFilter/>
    </div>
  );
};
