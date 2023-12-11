import Help from "./Help";
import SidebarLinks from "./SidebarLinks";
import Logo from "../../assets/icons/logo.svg";
const Sidebar = () => {
  return (
    <aside className="hidden sticky inset-0 w-[280px] h-screen border-r-2 py-8  md:flex flex-col justify-between">
      <div>
        <div className="flex items-center gap-2 px-8">
          <img src={Logo} className="w-6 h-6" alt="" />
          <h2 className="text-2xl font-[400px] font-Audiowide text-[#1570EF]">Tajdid Store</h2>
        </div>
        <SidebarLinks />
      </div>
      <Help />
    </aside>
  );
};

export default Sidebar;
