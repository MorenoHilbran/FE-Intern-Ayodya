import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/templates/Dashboard";
import Kelola from "./components/templates/Kelola";
import LoginPage from "./components/templates/LoginPage";
import Home from "./components/pages/users/home";


const router = createBrowserRouter([
  {
    path: "/Admin",
    element: <Dashboard />,

  },
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path:"/Admin/dashboard",
    element: <Dashboard />,
  },
  {
    path:"/Admin/kelola",
    element: <Kelola />,
  },
  {
    path:"/User/home",
    element: <Home />
  }
]);

export default function App() {
  return <RouterProvider router={router} />;

}
