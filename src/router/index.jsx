import { Route, Routes } from "react-router-dom";

import Dashboard from "../components/templates/Dashboard";
import Kelola from "../components/templates/Kelola";
import LayoutUser from "../components/layouts/LayoutUser";
import LandingPage from "../components/pages/users/LandingPage";
import LoginUser from "../components/pages/users/LoginUser";
import LoginAdmin from "../components/templates/LoginAdmin";
import RegisterUser from "../components/pages/users/RegisterUser";
import UserHome from "../components/pages/users/UserHome";
import UserKelas from "../components/pages/users/UserKelas";
import UserNotif from "../components/pages/users/UserNotif";
import UserProfile from "../components/pages/users/UserProfile";
import LayoutAdmin from "../components/layouts/LayoutAdmin";

export default function Router() {
  return (
    <Routes>
       <Route path="*" element={<h1> 404 </h1>} />
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginUser />} />
      <Route path="/login/admin" element={<LoginAdmin />} />

      <Route path="/register" element={<RegisterUser />} />

      
      <Route path="/admin" element={<LayoutAdmin />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="kelola" element={<Kelola />} />
      </Route>

      
      <Route path="/user" element={<LayoutUser />}>
        <Route path="home" element={<UserHome />} />
        <Route path="kelas" element={<UserKelas />} />
        <Route path="notifikasi" element={<UserNotif />} />
        <Route path="profil" element={<UserProfile />} />
      </Route>
    </Routes>
  );
}
