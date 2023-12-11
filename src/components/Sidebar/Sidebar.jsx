import Help from "./Help";
import SidebarLinks from "./SidebarLinks";
import Logo from "../../assets/icons/logo.svg";
const Sidebar = () => {
  return (
    <aside className="hidden sticky inset-0 w-[280px] h-screen border-r-2 py-8  md:flex flex-col justify-between">
      <div>
        <h1 className="text-[20px] font-[400px] font-Audiowide  text-[#1570EF] px-5 flex items-center gap-1">
          <img src={Logo} alt="" />
          Tajdid Store
        </h1>
        <SidebarLinks />
      </div>
      <Help />
    </aside>
  );
};

export default Sidebar;
