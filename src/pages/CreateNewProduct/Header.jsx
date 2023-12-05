/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';

const Header = ({ onSubmit, isPending }) => {
    return (
        <div className="flex justify-between  h-[54px] px-8 py-8">
            {/* text  */}
            <div>
                <p className="text-lg font-bold">Create product</p>
                <p className="text-sm">Upload your product photo and details here.</p>
            </div>
            {/* buttons */}
            <div className="space-x-3">
                <Link to="/">
                    <Button
                        styles={"px-4 py-2 border border-gray-300 font-bold rounded-md"}
                        content={"Cancel"}
                    />
                </Link>
                <Button
                    type="sumbit"
                    onClick={onSubmit}
                    styles={`${isPending && "bg-opacity-30"} px-4 py-2 bg-[#1570EF] text-white font-bold border border-gray-300 rounded-md`}
                    content={isPending ? "creating..." : "create"}
                />
            </div>
        </div>
    );
};

export default Header;