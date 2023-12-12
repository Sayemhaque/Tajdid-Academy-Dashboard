import React from "react"
import { Link } from "react-router-dom";
type SidebarLinksProps = {
  active: string;
  icon: string;
  text: string;
  ChevronDownIcon?:React.ReactNode;
  to: string;
}
// eslint-disable-next-line react/prop-types
export const SidebarLink: React.FC<SidebarLinksProps> = ({active, icon, text, ChevronDownIcon, to }) => {
  return (
    <>
      <Link to={to} className={`${active === to ? "bg-[#EFF8FF] border-l-8 border-[#1570EF]"  : ""} flex justify-between items-center  cursor-pointer px-8  py-[10px]`}>
        <div  className="flex items-center gap-4">
          <img className="w-4 h-4 object-contain" src={icon} alt="" />
          <p className="text-[#101828] font-medium text-sm">{text}</p>
        </div>
        {ChevronDownIcon}
      </Link>
    </>
  );
};