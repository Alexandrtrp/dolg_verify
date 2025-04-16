import { Button, colors } from "@mui/material";
import React from "react";

export const VerifyFilter = () => {

  return (
    <div className="flex gap-6">
      <Button className="normal-case" variant="outlined">
        Все записи
      </Button>
      <Button className="normal-case" variant="outlined">
        Верифицированные
      </Button>
      <Button className="normal-case" variant="outlined">
        Удаленные
      </Button>
      <Button className="normal-case" variant="outlined">
        Новые
      </Button>
      <Button className="normal-case" variant="outlined">
        Измененные
      </Button>
    </div>
  );
};
