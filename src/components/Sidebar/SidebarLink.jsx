import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const SidebarLink = ({ icon, text, ChevronDownIcon, to }) => {
  return (
    <>
      <Link to={to} className="flex justify-between items-center  cursor-pointer px-8  py-[10px] ">
        <div  className="flex items-center gap-4">
          <img className="w-4 h-4 object-contain" src={icon} alt="" />
          <p className="text-[#101828] font-normal text-sm">{text}</p>
        </div>
        {ChevronDownIcon}
      </Link>
    </>
  );
};
