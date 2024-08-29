import React, { useState } from "react";
import { Inter } from "next/font/google";
import HeaderLayout from "@/layouts/headerLayout";
import { useCategoryApps } from "@/hooks/useCategoryApps";
import { CategoryCard } from "@/components/CategoryCard";
import { Pagination } from "@/components/Pagination";

const inter = Inter({ subsets: ["latin"] });

function HomeScreen() {
  const categoryCards = useCategoryApps();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(categoryCards.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedCards = categoryCards.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="pt-16 space-y-4 p-10 justify-between">
      <div className="sm:justify-center lg:flex   lg:justify-between  items-end">
        <div className="space-y-2">
          <h1 className="text-black text-xl font-bold">
            Top shopify collections
          </h1>
          <p className="text-grey-700 text-sm">
            We use an agile approach to test assumptions and connect with the
            needs of your audience early and often.
          </p>
        </div>

        <text
          style={{ cursor: "pointer" }}
          className="text-blue-500 flex-none align-bottom  text-end"
        >
          See all
        </text>
      </div>

      <div className="w-full grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {paginatedCards.map((card, index) => (
          <CategoryCard key={index} {...card} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export default HeaderLayout(HomeScreen);
