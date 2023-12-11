import DownLoadIcon from "../../assets/icons/Icon (4).png"
const PhotoUpload = () => {
    return (
        <div className="grid grid-cols-3">
        <div>
            <label>Product Photo</label>
            <p className="text-sm text-gray-400">This will be displayed on your product</p>
        </div> 
        <div className="w-[512px] flex items-center justify-between  col-span-2">
           <div className="bg-white border border-[#EAECF0] p-2 rounded-lg">
           <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="" className="h-[125px] w-[166px] object-contain" />
           </div>
           <div className="bg-white border border-[#EAECF0] p-4 rounded-lg">
           <div className="text-center text-sm flex flex-col items-center">
                <input type="file" id="image" className="hidden" />
                <div className="w-10 h-10 bg-[#EFF8FF] flex justify-center items-center rounded-full">
                    <img src={DownLoadIcon} className="text-gray-400" />
                </div>
                <p className="mt-5"> <label htmlFor="image" className="text-blue-400 cursor-pointer font-bold">click to upload</label> or drag and drop <br />SVG, PNG, JPG or GIF (max. 800x400px)</p>
            </div>
           </div>
        </div>
    </div>
    );
};

export default PhotoUpload;