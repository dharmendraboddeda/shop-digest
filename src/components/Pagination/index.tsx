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
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div
      className={`flex border  bg-white bottom-0 flex-wrap items-center justify-between rounded-lg p-6 ${className}`}
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
      <div className="h-10 flex items-center space-x-2">
        <button
          className="border p-1"
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          <FaAngleLeft />
        </button>
        <button
          className="border p-1"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};
