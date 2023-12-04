import Rating from "react-rating";
import { FiStar } from "react-icons/fi"
import { FaStar, FaTrashAlt } from "react-icons/fa"
/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
    const { title, price, rating, image } = product;
    return (
        <article className="border border-gray-200 p-3">
            <img
                src={image}
                alt=""
                className="w-[200px] h-[200px] mx-auto"
            />
            <div className="space-y-2">
                <p className="text-md font-bold mt-3">${price}</p>
                <div className="flex justify-between items-center">
                    <div >
                        {/* rating */}
                        <Rating
                            readonly
                            placeholderRating={rating.rate}
                            emptySymbol={<FiStar className="text-[#FF9017] text-md" />}
                            placeholderSymbol={<FaStar className="text-[#FF9017] text-md" />}
                        />
                        <span className="text-[#FF9017] text-md font-bold ml-1">{rating.rate}</span>
                    </div>
                    <FaTrashAlt className="text-[#E50000] cursor-pointer" />
                </div>
                <p className="text-sm text-[#606060]">{title}</p>
            </div>
        </article>
    );
};

export default ProductCard;