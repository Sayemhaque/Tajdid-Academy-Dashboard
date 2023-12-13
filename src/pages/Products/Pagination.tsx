import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { PaginationProps } from "../../Model/types";

const Pagination = ({ currentPage, totalPages }: PaginationProps) => {
  const isPreviousDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;

  return (
    <div className="mx-8 pb-12">
      <div className="flex items-center justify-between px-6 pt-5 mt-5 border-t border-gray-200">
        <div>
          <p
            className={`rounded flex items-center gap-2 cursor-pointer ${
              isPreviousDisabled ? "text-gray-400 cursor-not-allowed" : ""
            } text-gray-500`}
          >
            <FiArrowLeft />
            Previous
          </p>
        </div>
        <div>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              className={`font-medium px-3 py-1 mx-1 rounded ${
                currentPage === index + 1
                  ? "bg-[#EFF8FF] text-[#1570EF]"
                  : "text-gray-700"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <div>
          <p
            className={`rounded flex items-center gap-2 cursor-pointer ${
              isNextDisabled ? "bg-gray-300 cursor-not-allowed" : "text-black"
            } text-black`}
          >
            Next
            <FiArrowRight />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
