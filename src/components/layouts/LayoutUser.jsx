import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../organisms/Navbar";

export default function Layout() {
  return (
    <div className="flex flex-col">
        <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
