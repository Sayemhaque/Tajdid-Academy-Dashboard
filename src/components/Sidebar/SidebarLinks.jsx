/* eslint-disable react/prop-types */
import { FiChevronDown } from "react-icons/fi";
import { SidebarLink } from "./SidebarLink";
import PorudctIcon from "../../assets/icons/3-layers.png"
import AnalyticsIcon from "../../assets/icons/Vector.png"
import BillingIcon from "../../assets/icons/icon.png"
import HomeIcon from "../../assets/icons/Icon (1).png"
import UserIcon from "../../assets/icons/Icon (2).png"
import LogOutIcon from "../../assets/icons/Icon (3).png"


const SidebarLinks = () => {
    return (
        <nav className="mt-12">
            <ul className="space-y-3">
                <SidebarLink
                    icon={PorudctIcon}
                    text="Products"
                    to="/"
                />
                <SidebarLink
                    icon={AnalyticsIcon}
                    text="Analytics" ChevronDownIcon={<FiChevronDown />}
                    to={"analytics"} />
                <SidebarLink
                    icon={BillingIcon}
                    text="Billing"
                    ChevronDownIcon={<FiChevronDown />}
                    to={"billing"} />
                <SidebarLink
                    icon={HomeIcon}
                    text="Company"
                    ChevronDownIcon={<FiChevronDown />}
                    to={"company"} />
                <SidebarLink
                    icon={UserIcon}
                    text="Admin" />
                <SidebarLink
                    icon={LogOutIcon}
                    text="Logout" />
            </ul>
        </nav>
    );
};

export default SidebarLinks;
