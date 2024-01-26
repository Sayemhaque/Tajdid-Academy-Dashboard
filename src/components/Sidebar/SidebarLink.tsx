import { Link } from "react-router-dom";
import { SidebarLinksProps } from "../../Model/types";

export const SidebarLink = ({
  active,
  icon,
  text,
  to,
}: SidebarLinksProps) => {
  return (
    <>
      <Link
        to={to}
        className={`${
          active === to ? "bg-[#EFF8FF] border-l-8 border-[#1570EF]" : ""
        } flex justify-between items-center  cursor-pointer px-8  py-[10px]`}
      >
        <div className="flex items-center gap-4">
          <img className="w-4 h-4 object-contain" src={icon} alt="" />
          <p className="text-black font-medium text-md">{text}</p>
        </div>
      </Link>
    </>
  );
};
