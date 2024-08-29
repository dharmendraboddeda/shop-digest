import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export interface IPaginationProps {
  className?: string;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  className,
  currentPage,
  totalPages,
  onPageChange,
}: IPaginationProps) => {
  function handlePrevious() {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  }

  function handleNext() {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  }

  const pageNumbers = [];
  const maxPageNumbersToShow = 3;
  const halfMaxPageNumbersToShow = Math.floor(maxPageNumbersToShow / 2);

  let startPage = Math.max(1, currentPage - halfMaxPageNumbersToShow);
  let endPage = Math.min(totalPages, currentPage + halfMaxPageNumbersToShow);

  if (currentPage <= halfMaxPageNumbersToShow) {
    endPage = Math.min(totalPages, maxPageNumbersToShow);
  }

  if (currentPage + halfMaxPageNumbersToShow >= totalPages) {
    startPage = Math.max(1, totalPages - maxPageNumbersToShow + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div
      className={`flex gap-4 justify-center border bg-white bottom-0 flex-wrap items-center md:justify-between rounded-lg p-6 ${className}`}
    >
      <div className="space-x-2">
        <span className="text-gray-700">Showing</span>
        <span className="text-black">{currentPage}</span>
        <span className="text-gray-700">of</span>
        <span className="text-black">{totalPages}</span>
      </div>
      <div className="text-gray-700 p-l-5 pr-5 border rounded-lg flex justify-center space-x-2">
        <button
          className="p-1 flex-1 text-center border-r-2"
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="p-1 flex-1 text-center"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      <div className="flex border rounded-lg ">
        <button
          className={` ${currentPage === 1 && "hidden"} p-2`}
          onClick={handlePrevious}
        >
          <FaAngleLeft />
        </button>
        {pageNumbers.map((pageNumber, index) => (
          <button
            key={index}
            onClick={() => onPageChange(pageNumber)}
            className={`p-2 ${
              pageNumber === currentPage && "font-bold"
            } border`}
          >
            {pageNumber}
          </button>
        ))}
        <span className={`${currentPage >= totalPages - 1 && "hidden"} p-2`}>
          ...
        </span>
        <button
          className={`${currentPage >= totalPages - 1 && "hidden"} border p-2`}
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages}
        </button>
        <button
          className={`${
            currentPage == totalPages && "hidden"
          } justify-center items-center p-2 `}
          onClick={handleNext}
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};
