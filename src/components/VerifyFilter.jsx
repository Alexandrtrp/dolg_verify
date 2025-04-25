import { Button, colors } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFilter } from "../service/getData";

export const VerifyFilter = () => {
  
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.getData.filterType);

  const blackButton = {
    backgroundColor: filter === null ? "#212121" : "white",
    color: filter === null ? "white" : "#1976d2",
  };

  const greenButton = {
    backgroundColor: filter === "verify" ? "#4caf50" : "white",
    color: filter === "verify" ? "white" : "#1976d2",
  };

  const greyButton = {
    backgroundColor: filter === "new" ? "#757575" : "white",
    color: filter === "new" ? "white" : "#1976d2",
  };

  const blueButton = {
    backgroundColor: filter === "changed" ? "#1976d2" : "white",
    color: filter === "changed" ? "white" : "#1976d2",
  };

  return (
    <div className="flex gap-6">
      <Button
        sx={{ textTransform: "none", ...blackButton }}
        variant="outlined"
        onClick={() => {
          dispatch(addFilter(null));
        }}
      >
        Все записи
      </Button>
      <Button
        sx={{ textTransform: "none", ...greenButton }}
        variant="outlined"
        onClick={() => {
          dispatch(addFilter("verify"));
        }}
      >
        Верифицированные
      </Button>

      {/* фильтр для удаленных строк */}
      {/* <Button
        sx={{ textTransform: "none", ...redButton }}
        variant="outlined"
        onClick={() => {
          dispatch(addFilter("delete"));
        }}
      >
        Удаленные
      </Button> */}
      <Button
        sx={{ textTransform: "none", ...blueButton }}
        variant="outlined"
        onClick={() => {
          dispatch(addFilter("changed"));
        }}
      >
        Новые
      </Button>
      <Button
        sx={{ textTransform: "none", ...greyButton }}
        variant="outlined"
        onClick={() => {
          dispatch(addFilter("new"));
        }}
      >
        Измененные
      </Button>
    </div>
  );
};
