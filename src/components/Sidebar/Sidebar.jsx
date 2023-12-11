import Help from "./Help";
import SidebarLinks from "./SidebarLinks";
import Logo from "../../assets/icons/game-icons_ubisoft-sun.png"
const Sidebar = () => {
    return (
        <aside className="hidden sticky inset-0 w-[280px] h-screen border-r-2 py-8  md:flex flex-col justify-between">
            <div>
                {/* Logo */}
                <h1
                    className="text-[24px] font-[400px] font-Audiowide  text-[#1570EF]
                px-8 flex items-center gap-1">
                    <img src={Logo} alt="" />
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