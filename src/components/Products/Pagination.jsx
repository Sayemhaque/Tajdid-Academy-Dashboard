/* eslint-disable react/prop-types */
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Pagination = ({ currentPage, totalPages }) => {
  const isPreviousDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;

  return (
    <div className="flex items-center justify-between px-8 py-4">
      <div>
        <p
          className={`rounded flex items-center gap-2 cursor-pointer ${
            isPreviousDisabled ? 'text-gray-400 cursor-not-allowed' : ''
          } text-white`}
          disabled={isPreviousDisabled}
        >
          <FiArrowLeft />
          Previous
        </p>
      </div>
      <div>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            className={`px-3 py-1 mx-1 rounded ${currentPage === index + 1
              ? 'bg-[#EFF8FF] text-[#1570EF]' : 'text-gray-700'
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div>
        <p
          className={`rounded flex items-center gap-2 cursor-pointer ${
            isNextDisabled ? 'bg-gray-300 cursor-not-allowed' : 'text-black'
          } text-white`}
          disabled={isNextDisabled}
        >
          Next
          <FiArrowRight />
        </p>
      </div>
    </div>
  );
};

export default Pagination;
