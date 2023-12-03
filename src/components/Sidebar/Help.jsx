import { CiCircleQuestion } from "react-icons/ci";
import Button from "../Button/Button";

const Help = () => {
    return (
        <div className='bg-[#F5FAFF] p-2 space-y-3 relative'>
            <h4 className='text-md text-center'>Help Center</h4>
            <p className='text-center text-sm'>Getting trouble on Simplebook? Reach out and solve your problem</p>
            <Button
                styles={"bg-[#1570EF] w-full text-sm py-2 rounded-md text-white"}
                content={"Consult Now"}
            />
            {/* icons */}
            <div className="absolute  -top-[80px] left-[100px]  w-14 h-14 bg-white rounded-full flex  justify-center items-center shadow-lg">
                <CiCircleQuestion className="text-3xl bg-[#1570EF] text-white rounded-full" />
            </div>
        </div>
    );
};

export default Help;