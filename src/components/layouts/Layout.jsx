import { Outlet } from "react-router-dom";
import CardDashboard from "../dashboard/Card";
import Sidebar from "../dashboard/sidebar";
import DashboardHeader from "../organisms/Header";

export default function Layout() {
    return (
      <div className="flex">
        <div className="w-1/6">
          <Sidebar />
        </div>
        <div className="flex flex-col w-5/6">
          <DashboardHeader />
          <CardDashboard />
          <Outlet />
        </div>
      </div>
    );
  }
  
