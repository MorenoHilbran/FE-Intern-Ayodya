import { Route, Routes } from "react-router-dom";
import LoginPage from "../components/templates/LoginPage";
import Dashboard from "../components/templates/Dashboard";
import Kelola from "../components/templates/Kelola";
import Layout from "../components/layouts/Layout";
import User from "../components/templates/User";

export default function Router() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<LoginPage />} />

        <Route path="admin/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="kelola" element={<Kelola />} />
          <Route path="user" element={<User />} />
        </Route>
      </Route>
    </Routes>
  );
}

// const router = createBrowserRouter([
//   {
//     path: "/Admin",
//     element: <Dashboard />,
//   },
//   {
//     path: "/",
//     element: <LoginPage />,
//   },
//   {
//     path: "/Admin/dashboard",
//     element: <Dashboard />,
//   },
//   {
//     path: "/Admin/kelola",
//     element: <Kelola />,
//   },
//   {
//     path: "/User/home",
//     element: <Home />,
//   },
// ]);
