import { Route, Routes } from "react-router-dom";

import Dashboard from "../components/templates/Dashboard";
import Kelola from "../components/templates/Kelola";
import Layout from "../components/layouts/Layout";
import User from "../components/templates/User";
import Home from "../components/pages/users/Home";
import LoginUser from "../components/pages/users/LoginUser";
import LoginAdmin from "../components/templates/LoginAdmin";
import RegisterUser from "../components/pages/users/RegisterUser";


export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginUser />} />
      <Route path="/login/admin" element={<LoginAdmin />} />

      <Route path="/register" element={<RegisterUser />} />

      <Route path="/admin" element={<Layout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="kelola" element={<Kelola />} />
        <Route path="user" element={<User />} />
      </Route>

      <Route path="/user">
        <Route path="login" element={<LoginUser />} />
        <Route path="home" element={<Home />} />
      </Route>

    </Routes>
  );
}