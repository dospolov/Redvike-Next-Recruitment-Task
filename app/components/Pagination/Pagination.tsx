"use client"

import React from "react"
import { useSearchParams, useRouter } from "next/navigation"
import PaginationDelimiter from "./PaginationDelimiter"
import PaginationArrow from "./PaginationArrow"
import PaginationNum from "./PaginationNum"

const DEFAULT_PAGE = "1"
const DEFAULT_PER_PAGE = "20"

function Pagination({
  hasNextPage,
  hasPrevPage,
  itemsCount,
}: {
  hasNextPage: boolean
  hasPrevPage: boolean
  itemsCount: number
}) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const page = Number(searchParams.get("page") ?? DEFAULT_PAGE)
  const per_page = Number(searchParams.get("per_page") ?? DEFAULT_PER_PAGE)
  const lastPage = Math.ceil(itemsCount / per_page)

  if (page <= 0 || isNaN(page)) router.push(`?page=1&per_page=${per_page}`)
  if (page > lastPage) router.push(`?page=${lastPage}&per_page=${per_page}`)

  return (
    <nav className="flex items-center justify-center border-t border-gray-200 px-4 sm:px-0">
      <PaginationArrow
        isDisabled={!hasPrevPage}
        page={page}
        per_page={per_page}
        isNext={false}
      />
      <PaginationNum page={1} per_page={per_page} isActive={page > 1} />
      {page > 2 && <PaginationDelimiter />}
      <div
        className={
          "inline-flex items-center border-t-2 border-indigo-500 px-4 pt-4 text-sm font-medium text-indigo-600"
        }
      >
        {page}
      </div>
      {page < lastPage - 1 && <PaginationDelimiter />}
      <PaginationNum
        page={lastPage}
        per_page={per_page}
        isActive={page < lastPage}
      />
      <PaginationArrow
        isDisabled={!hasNextPage}
        page={page}
        per_page={per_page}
        isNext={true}
      />
    </nav>
  )
}

export default Pagination
