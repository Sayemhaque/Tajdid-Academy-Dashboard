import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex justify-between font-Inter">
      <Sidebar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
