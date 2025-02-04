import CardDashboard from "../dashboard/Card";
import Sidebar from "../dashboard/sidebar";
import TablePembayaran from "../dashboard/tablepembayaran";
import DashboardHeader from "../organisms/Header";

export default function Dashboard() {
    return (
      <div className="flex">
        <div className="w-1/6">
          <Sidebar />
        </div>
        <div className="flex flex-col w-5/6">
          <DashboardHeader />
          <CardDashboard />
          <TablePembayaran />
        </div>
      </div>
    );
  }
  
