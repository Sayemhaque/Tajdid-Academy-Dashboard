import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const SidebarLink = ({ icon, text, ChevronDownIcon, to }) => {
    return (
        <>
            <li className="flex justify-between items-center text-md cursor-pointer px-8 text-[#101828] py-[10px] font-semibold">
                <Link to={to} className="flex items-center gap-4">
                     <img className="w-5 h-5 object-contain" src={icon} alt="" />
                    {text}
                </Link>
                {ChevronDownIcon}
            </li>
        </>
    )
};