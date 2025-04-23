import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    { login: "rrr", password: "123", name: "Sasha" },
    { login: "admin", password: "cofe", name: "Admin" },
  ],
  isAuth: false,
  isAdmin: false,
  nameAuthUser: ''
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    isAuthCheck: (state, action) => {
      const authUser = state.users.find(
        (el) =>
          el.login === action.payload.login &&
          el.password === action.payload.password
      );
      if (authUser) {
        state.isAuth = true;
        state.nameAuthUser = authUser.name
      }
      if (authUser.name === "admin") state.isAdmin = true;
    },
    logout: (state) => {
      state.isAuth = false;
      state.isAdmin = false;
    },

    addNewUser: (state, action) => {
      console.log(action.payload);
      state.users.push({
        login: action.payload.login,
        password: action.payload.password,
        name: action.payload.name,
      });
    },
  },
});

export const { isAuthCheck, logout, addNewUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
