/* eslint-disable react/prop-types */
import { FiChevronDown } from "react-icons/fi";
import { SidebarLink } from "./SidebarLink";
const PorudctIcon = "../../assets/icons/product.svg";
const AnalyticsIcon = "../../assets/icons/Analytics.svg";
const BillingIcon = "../../assets/icons/Billing.svg";
const CompanyIcon = "../../assets/icons/company.svg";
const UserIcon = "../../assets/icons/admin.svg";
const LogOutIcon = "../../assets/icons/LogOut.svg";

import { useLocation } from "react-router-dom";
import Button from "../Button/Button";

const SidebarLinks = () => {
  const location = useLocation();

  const activeLink =
    location.pathname === "/"
      ? location.pathname
      : location.pathname.substring(1);

  return (
    <nav className="mt-12">
      <ul className="space-y-3">
        <SidebarLink
          active={activeLink}
          icon={PorudctIcon}
          text="Products"
          to="/"
        />
        <SidebarLink
          active={activeLink}
          icon={AnalyticsIcon}
          text="Analytics"
          ChevronDownIcon={<FiChevronDown />}
          to={"analytics"}
        />
        <SidebarLink
          active={activeLink}
          icon={BillingIcon}
          text="Billing"
          ChevronDownIcon={<FiChevronDown />}
          to={"billing"}
        />
        <SidebarLink
          active={activeLink}
          icon={CompanyIcon}
          text="Company"
          ChevronDownIcon={<FiChevronDown />}
          to={"company"}
        />
        <div className="flex flex-col justify-start items-start px-8 space-y-3">
          <div className="flex items-center">
            <img src={UserIcon} alt="" />
            <Button styles={""} content={"Admin"} />
          </div>
          <div className="flex items-center">
            <img src={LogOutIcon} alt="" />
            <Button styles={""} content={"Logout"} />
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default SidebarLinks;
