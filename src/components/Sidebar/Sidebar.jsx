import Help from "./Help";
import SidebarLinks from "./SidebarLinks";
import { CiShop } from "react-icons/ci";
const Sidebar = () => {
    return (
        <aside className="hidden sticky inset-0 w-[280px] h-screen border-r-2 py-8  md:flex flex-col justify-between">
            <div>
                {/* Logo */}
                <h1
                    className="text-2xl font-bold font-serif italic  text-[#1570EF]
                px-8 flex items-center gap-2">
                    <CiShop />
                    Tajdid Store
                </h1>
                {/* Links */}
                <SidebarLinks />
            </div>
            {/* Help center */}
            <Help />
        </aside>
    );
};

export default Sidebar;