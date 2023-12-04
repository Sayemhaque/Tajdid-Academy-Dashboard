import { FaFileDownload } from "react-icons/fa";
import Header from "./Header";


const CreateProduct = () => {
    return (
        <section>
            <Header />
            {/* Form */}
            <form className="px-8 py-8 mt-16 space-y-12">
                <div className="flex gap-72">
                    <label>Title</label>
                    <input
                        type="text"
                        className="px-5 py-2 w-[512px] h-[44px] border border-[#D0D5DD] rounded-md focus:outline-none"
                        placeholder="Title" />
                </div>
                <div className="flex gap-72">
                    <label>Price</label>
                    <input
                        type="text"
                        className="px-5 py-2 w-[512px] h-[44px] border border-[#D0D5DD] rounded-md focus:outline-none"
                        placeholder="Price" />
                </div>
                <div className="flex gap-14">
                    <div>
                        <label>Product Photo</label>
                        <p className="text-sm text-gray-400">This will be displayed on your product</p>
                    </div>
                    <div className="flex items-center justify-between gap-12">
                        <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" className="h-[200px] w-[200px]" />
                        <div className="text-center flex flex-col items-center">
                            <input type="file" id="image" className="hidden" />
                            <div className="w-10 h-10 bg-[#EFF8FF] flex justify-center items-center rounded-full">
                                <FaFileDownload className="text-gray-400" />
                            </div>
                            <p className="mt-5"> <label htmlFor="image" className="text-blue-400 cursor-pointer font-bold">click to upload</label> or drag and drop <br />SVG, PNG, JPG or GIF (max. 800x400px)</p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-16">
                    <div>
                        <label>Product Photo</label>
                        <p className="text-sm text-gray-400">This will be displayed on your product</p>
                    </div>
                    <div>
                        <textarea name="" id="" cols="50" rows="5" className="border border-[#D0D5DD] rounded-md focus:outline-none p-2" placeholder=" write something about your product..">
                        </textarea>
                        <p>275 character left</p>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default CreateProduct;

//Form and form data need
//fuction need to submit

