import { Button, colors } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFilter } from "../service/getData";

export const VerifyFilter = () => {
  // const [filter, setfilter] = useState(null);
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.getData.filterType);

  const blackButton = {
    backgroundColor: filter === null ? "black" : "white",
    color: filter === null ? "white" : "#1976d2",
  };

  const greenButton = {
    backgroundColor: filter === "verify" ? "#00CC00" : "white",
    color: filter === "verify" ? "black" : "#1976d2",
  };

  const redButton = {
    backgroundColor: filter === "delete" ? "#FF0000" : "white",
    color: filter === "delete" ? "black" : "#1976d2",
  };

  const greyButton = {
    backgroundColor: filter === "new" ? "grey" : "white",
    color: filter === "new" ? "black" : "#1976d2",
  };

  const blueButton = {
    backgroundColor: filter === "changed" ? "blue" : "white",
    color: filter === "changed" ? "black" : "#1976d2",
  };

  return (
    <div className="flex gap-6  m-12">
      <Button
      style={blackButton}
        sx={{ textTransform: "none" }}
        variant="outlined"
        onClick={() => {
          dispatch(addFilter(null));
        }}
      >
        Все записи
      </Button>
      <Button
        style={greenButton}
        sx={{ textTransform: "none" }}
        variant="outlined"
        onClick={() => {
          dispatch(addFilter("verify"));
        }}
      >
        Верифицированные
      </Button>
      <Button
        style={redButton}
        sx={{ textTransform: "none" }}
        variant="outlined"
        onClick={() => {
          dispatch(addFilter("delete"));
        }}
      >
        Удаленные
      </Button>
      <Button
        style={blueButton}
        sx={{ textTransform: "none" }}
        variant="outlined"
        onClick={() => {
          dispatch(addFilter("changed"));
        }}
      >
        Новые
      </Button>
      <Button
        style={greyButton}
        sx={{ textTransform: "none" }}
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
