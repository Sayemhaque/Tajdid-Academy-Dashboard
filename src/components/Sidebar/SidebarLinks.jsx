/* eslint-disable react/prop-types */
import { FiChevronDown } from "react-icons/fi";
import { SidebarLink } from "./SidebarLink";
import PorudctIcon from "../../assets/icons/product.svg"
import AnalyticsIcon from "../../assets/icons/Analytics.svg"
import BillingIcon from "../../assets/icons/Billing.svg"
import CompanyIcon from "../../assets/icons/company.svg"
import UserIcon from "../../assets/icons/admin.svg"
import LogOutIcon from "../../assets/icons/LogOut.svg"


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
                    icon={CompanyIcon}
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
