import React from "react";
import Sidebar from "../organisms/Sidebar";
import DashboardHeader from "../organisms/HeaderAdmin";
import { Outlet } from "react-router-dom";

export default function LayoutAdmin() {
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
