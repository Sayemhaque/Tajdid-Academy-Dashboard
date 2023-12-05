import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Dashboard = () => {
    return (
        <>
            <div className="flex">
                {/* sidebar */}
            <Sidebar/>
            <div className="w-[1096px]">
            <Outlet/>
            </div>

            {/* content area */}
            </div>
        </>
    );
};

export default Dashboard;