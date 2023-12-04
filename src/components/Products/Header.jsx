import Button from "../Button/Button"
import { FiChevronDown } from "react-icons/fi"
const Header = () => {
    return (
        <header className="py-12 px-8 flex justify-between items-center w-[1096px] h-[54px]">
            {/* title */}
            <h3 className="text-3xl font-bold">Products</h3>
            <div className="flex items-center gap-8">
                {/* Button */}
                <Button
                    styles={"bg-[#1570EF] text-sm py-2 px-5 rounded-md text-white"}
                    content={"Create new"}
                />
                <div className="flex gap-2">
                    {/*Avatar*/}
                    <img src="https://file.xunruicms.com/admin_html/assets/pages/media/profile/profile_user.jpg" className="w-10 h-10 rounded-full" alt="" />
                    <div>
                        <div className="flex gap-2 items-center">
                            <p className="text-md font-semibold">Md Sayem Mia</p>
                            <FiChevronDown />
                        </div>
                        <p className="text-sm font-semibold">user</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;