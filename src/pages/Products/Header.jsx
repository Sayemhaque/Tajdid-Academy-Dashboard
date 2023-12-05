import { Link } from "react-router-dom";
import Button from "../../components/Button/Button"
const Header = () => {
    return (
        <header className="py-8 md:py-12 px-5 md:px-8 flex justify-between items-center  h-[54px]">
            {/* title */}
            <h3 className="text-xl md:text-3xl font-bold">Products</h3>
            <div className="flex items-center gap-8">
                {/* Button */}
                <Link to="create">
                    <Button
                        styles={"bg-[#1570EF] text-white"}
                        content={"Create new"}
                    />
                </Link>
                <div className="flex gap-2">
                    {/*Avatar*/}
                    <img
                        src="https://file.xunruicms.com/admin_html/assets/pages/media/profile/profile_user.jpg"
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full" alt="avatar" />
                    <div>
                        <div className="flex gap-2 items-center">
                            <p className="text-sm md:text-md font-semibold">Md Sayem Mia</p>
                        </div>
                        <p className="text-sm font-semibold">user</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;