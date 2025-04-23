import { Route, Routes } from "react-router-dom";
import { Auth } from "../components/Auth";
import { TablePage } from "../pages/TablePage";

export const RoutesComponent = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Auth />}></Route>
        <Route path="/table" element={<TablePage />}></Route>
      </Routes>
    </div>
  );
};
