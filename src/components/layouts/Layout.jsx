import React from "react";
import Sidebar from "../dashboard/Sidebar";
import DashboardHeader from "../organisms/Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex">
      <div className="w-1/6">
        <Sidebar />
      </div>
      <div className="flex flex-col w-5/6">
        <DashboardHeader />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
