import { CiBoxes, CiDollar, CiLogout,CiUser, CiWavePulse1 } from "react-icons/ci";
const SidebarLinks = () => {
    return (
        <nav className="mt-12">
            <ul className="space-y-3">
                <li className="bg-[#EFF8FF] text-md cursor-pointer px-8 text-[#101828] py-2 font-semibold flex items-center gap-2">
                    <CiBoxes className="text-2xl" />
                    Products
                </li>
                <li className="text-md cursor-pointer px-8 text-[#101828] py-2 font-semibold flex items-center gap-2">
                    <CiWavePulse1 className="text-2xl" />
                    Analatics
                </li>
                <li className="text-md cursor-pointer px-8 text-[#101828] py-2 font-semibold flex items-center gap-2">
                    <CiDollar className="text-2xl" />
                    Billing
                </li>
                <li className="text-md cursor-pointer px-8 text-[#101828] py-2 font-semibold flex items-center gap-2">
                    <CiUser className="text-2xl" />
                    Admin
                </li>
                <li className="text-md cursor-pointer px-8 text-[#101828] py-2 font-semibold flex items-center gap-2">
                    <CiLogout className="text-2xl" />
                    Logout
                </li>
            </ul>
        </nav>
    );
};

export default SidebarLinks;