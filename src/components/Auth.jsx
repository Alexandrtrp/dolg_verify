import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { isAuthCheck } from "../service/auth";
import { Box, Button, Container, Link, TextField, Typography } from "@mui/material";

export const Auth = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const isAuth = useSelector((state) => state.auth.isAuth);

  const navigate = useNavigate();

  useEffect(() => {
    isAuth
      ? navigate("table", { replace: false })
      : navigate("/", { replace: false });
  }, [isAuth, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        padding: '50px'
      }}
    >
      <Typography>Авторизация</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "400px",
        }}
      >
        <TextField
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          label="Логин"
          variant="outlined"
        />
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Пароль"
          type="password"
          variant="outlined"
        />
        <Button
        sx={{padding: '10px'}}
          variant="contained"
          onClick={() => {
            dispatch(isAuthCheck({ login: login, password: password }));
          }}
        >
          Вход
        </Button>

        {/* <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Link onClick={() => navigate("/forgot-password", { replace: true })}>
            Забыли пароль?
          </Link>
          <Link onClick={() => navigate("/registration", { replace: true })}>
            Регистрация
          </Link>
        </Box> */}
      </Box>
    </Container>
  );
};
