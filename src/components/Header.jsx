import { Menu, MenuItem, Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import logo from './assets/logo.svg'

export const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <header className="flex justify-between bg-gray-800 h-16 items-center p-10 w-full">
      <div className="flex gap-8 items-center p-10">
        <img
          src="../public/logo.svg"
          alt="Сервис Данные для производного долга"
          className="h-12 w-12"
        />
        <Link className="text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2">
          Данные для производного долга
        </Link>
        <Link className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2">
          Обратная связь
        </Link>
        <div>
          <Button
            sx={{
              textTransform: "none",
              color: "oklch(87.2% 0.01 258.338)",
              ":hover": {
                background: "oklch(37.3% 0.034 259.733)",
                color: "white",
                borderRadius: "0.375rem",
              },
            }}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            Меню администратора
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Кабинет администратора</MenuItem>
            <MenuItem onClick={handleClose}>Статистика регионов</MenuItem>
            <MenuItem onClick={handleClose}>Управление регионами</MenuItem>
          </Menu>
        </div>
      </div>
      <button className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 mx-6">
        Выйти
      </button>
    </header>
  );
};
