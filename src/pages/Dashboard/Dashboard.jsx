import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";

const Dashboard = () => {
    return (
        <>
            <div className="flex">
                {/* sidebar */}
            <Sidebar/>
            <Outlet/>

            {/* content area */}
            </div>
        </>
    );
};

export default Dashboard;