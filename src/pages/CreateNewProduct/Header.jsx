
import Button from '../../components/Button/Button';

const Header = () => {
    return (
        <div className="flex justify-between w-[1096px] h-[54px] px-8 py-8">
                {/* text  */}
                <div>
                    <p className="text-lg font-bold">Create product</p>
                    <p className="text-sm">Upload your product photo and details here.</p>
                </div>
                {/* buttons */}
                <div className="space-x-3">
                    <Button
                        styles={"px-4 py-2 border border-gray-300 font-bold rounded-md"}
                        content={"Cancel"}
                    />
                    <Button
                        styles={"px-4 py-2 bg-[#1570EF] text-white font-bold border border-gray-300 rounded-md"}
                        content={"Create"}
                    />
                </div>
            </div>
    );
};

export default Header;