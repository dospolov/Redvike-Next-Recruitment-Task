"use client"

import cn from "utils/cn"
import PaginationDelimiter from "./PaginationDelimiter"
import PaginationArrow from "./PaginationArrow"
import PaginationNum from "./PaginationNum"

type PaginationProps = {
  currentPage: number
  totalPages: number
  setPage: (page: number) => void
}

function Pagination({ currentPage, totalPages, setPage }: PaginationProps) {
  return (
    <div className="flex justify-center w-full">
      <nav
        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
        aria-label="Pagination"
      >
        {currentPage > 0 && (
          <PaginationArrow
            isNext={false}
            onClick={() => setPage(currentPage - 1)}
          />
        )}
        {currentPage > 0 && (
          <PaginationNum page={0} totalPages={totalPages} setPage={setPage} />
        )}
        {currentPage > 1 && <PaginationDelimiter />}
        <span
          className={cn(
            "relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
            currentPage === 0 && "rounded-l-md",
            currentPage === totalPages - 1 && "rounded-r-md"
          )}
        >
          {currentPage + 1}
        </span>
        {currentPage < totalPages - 2 && <PaginationDelimiter />}
        {currentPage < totalPages - 1 && (
          <PaginationNum
            page={totalPages - 1}
            totalPages={totalPages}
            setPage={setPage}
          />
        )}
        {currentPage < totalPages - 1 && (
          <PaginationArrow
            isNext={true}
            onClick={() => setPage(currentPage + 1)}
          />
        )}
      </nav>
    </div>
  )
}

export default Pagination
