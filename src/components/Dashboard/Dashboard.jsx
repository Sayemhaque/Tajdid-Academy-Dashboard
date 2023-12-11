import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="md:w-[1096px] lg:w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
