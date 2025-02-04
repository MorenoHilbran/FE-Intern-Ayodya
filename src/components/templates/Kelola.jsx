
import CardDashboard from "../dashboard/Card";
import Sidebar from "../dashboard/sidebar";
import TableKelola from "../dashboard/TableKelola";
import DashboardHeader from "../organisms/Header";

export default function Kelola() {
    return (
        <div className="flex">
                <div className="w-1/6">
                  <Sidebar />
                </div>
                <div className="flex flex-col w-5/6">
                  <DashboardHeader />
                  <CardDashboard />
                  <TableKelola />
                </div>
        </div>
    )
}