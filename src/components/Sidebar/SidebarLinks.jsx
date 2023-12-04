/* eslint-disable react/prop-types */
import { CiBoxes, CiDollar, CiHome, CiLogout, CiUser, CiWavePulse1 } from "react-icons/ci";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";

const SidebarLink = ({ icon, text, ChevronDownIcon, to }) => (
    <Link to={to}>
        <li className="flex justify-between items-center text-md cursor-pointer px-8 text-[#101828] py-2 font-semibold">
            <span className="flex gap-2">
                {icon}
                {text}
            </span>
            {ChevronDownIcon}
        </li>
    </Link>
);

const SidebarLinks = () => {
    return (
        <nav className="mt-12">
            <ul className="space-y-3">
                <SidebarLink icon={<CiBoxes className="text-2xl" />} text="Products" to={"/"} />
                <SidebarLink icon={<CiWavePulse1 className="text-2xl" />} text="Analytics" ChevronDownIcon={<FiChevronDown />} to={"analytics"} />
                <SidebarLink icon={<CiDollar className="text-2xl" />} text="Billing"
                    ChevronDownIcon={<FiChevronDown />} to={"billing"} />
                <SidebarLink icon={<CiHome className="text-2xl" />} text="Company"
                    ChevronDownIcon={<FiChevronDown />} to={"company"} />
                <SidebarLink icon={<CiUser className="text-2xl" />} text="Admin" />
                <SidebarLink icon={<CiLogout className="text-2xl" />} text="Logout" />
            </ul>
        </nav>
    );
};

export default SidebarLinks;