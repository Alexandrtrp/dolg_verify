import { Box, Checkbox, FormControlLabel } from "@mui/material";
import React, { useState } from "react";

export const ChekedForVerify = () => {
  const [checked, setChecked] = useState([false, false, false, false, false]);

  const handleChange = (event) => {
    setChecked([
      event.target.checked,
      event.target.checked,
      event.target.checked,
      event.target.checked,
      event.target.checked,
    ]);
  };

  const handleChange1 = (event) => {
    setChecked([
      event.target.checked,
      checked[1],
      checked[2],
      checked[3],
      checked[4],
    ]);
  };

  const handleChange2 = (event) => {
    setChecked([
      checked[0],
      event.target.checked,
      checked[2],
      checked[3],
      checked[4],
    ]);
  };
  const handleChange3 = (event) => {
    setChecked([
      checked[0],
      checked[1],
      event.target.checked,
      checked[3],
      checked[4],
    ]);
  };
  const handleChange4 = (event) => {
    setChecked([
      checked[0],
      checked[1],
      checked[2],
      event.target.checked,
      checked[4],
    ]);
  };
  const handleChange5 = (event) => {
    setChecked([
      checked[0],
      checked[1],
      checked[2],
      checked[3],
      event.target.checked,
    ]);
  };
  const children = (
    <Box sx={{ display: "flex", flexDirection: "column" }} >
      <FormControlLabel 
        label="Верифицированные"
        control={<Checkbox checked={checked[0]} onChange={handleChange1} />}
      />
      <FormControlLabel 
        label="Удаленные"
        control={<Checkbox checked={checked[1]} onChange={handleChange2} />}
      />
      <FormControlLabel 
        label="Новые"
        control={<Checkbox checked={checked[2]} onChange={handleChange3} />}
      />
      <FormControlLabel 
        label="Измененные"
        control={<Checkbox checked={checked[3]} onChange={handleChange4} />}
      />
      <FormControlLabel 
        label="Без действия"
        control={<Checkbox checked={checked[4]} onChange={handleChange5} />}
      />
    </Box>
  );
  return (
    <div className="flex flex-col m-12">
      <FormControlLabel 
        label="Все записи"
        control={
          <Checkbox
            checked={
              checked[0] && checked[1] && checked[2] && checked[3] && checked[4]
            }
            // indeterminate={checked[0] !== checked[1]}
            onChange={handleChange}
          />
        }
      />
      {children}
    </div>
  );
};
