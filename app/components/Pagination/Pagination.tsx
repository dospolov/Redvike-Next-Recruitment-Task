"use client"

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
    <nav className="flex items-center justify-center border-t border-gray-200 px-4 sm:px-0">
      <PaginationArrow
        isDisabled={currentPage < 2}
        isNext={false}
        onClick={() => setPage(currentPage - 1)}
      />
      {currentPage > 0 && <PaginationNum page={0} setPage={setPage} />}
      {currentPage > 1 && <PaginationDelimiter />}
      <div
        className={
          "inline-flex items-center border-t-2 border-indigo-500 px-4 pt-4 text-sm font-medium text-indigo-600"
        }
      >
        {currentPage + 1}
      </div>
      {currentPage < totalPages - 2 && <PaginationDelimiter />}
      {currentPage < totalPages - 1 && (
        <PaginationNum page={totalPages - 1} setPage={setPage} />
      )}
      <PaginationArrow
        isDisabled={currentPage > totalPages - 2}
        isNext={true}
        onClick={() => setPage(currentPage + 1)}
      />
    </nav>
  )
}

export default Pagination
