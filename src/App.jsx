import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/templates/Dashboard";
import Kelola from "./components/templates/Kelola";
import LoginPage from "./components/templates/LoginPage";


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
  }
]);

export default function App() {
  return <RouterProvider router={router} />;
}
