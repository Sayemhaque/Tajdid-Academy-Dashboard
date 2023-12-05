import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const SidebarLink = ({ icon, text, ChevronDownIcon, to }) => {
    return (
        <>
            <li className="flex justify-between items-center text-md cursor-pointer px-8 text-[#101828] py-2 font-semibold">
                <Link to={to} className="flex gap-2 ">
                    {icon}
                    {text}
                </Link>
                {ChevronDownIcon}
            </li>
        </>
    )
};