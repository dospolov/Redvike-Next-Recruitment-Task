"use client"

import React from "react"
import { useSearchParams, useRouter } from "next/navigation"
import PaginationDelimiter from "./PaginationDelimiter"
import PaginationPrevButton from "./PaginationPrevButton"
import PaginationNumButton from "./PaginationNumButton"
import PaginationNextButton from "./PaginationNextButton"

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

  const page = Number(searchParams.get("page") ?? "1")
  const per_page = Number(searchParams.get("per_page") ?? "5")
  const lastPage = Math.ceil(itemsCount / per_page)

  if (page <= 0 || isNaN(page)) router.push(`?page=1&per_page=${per_page}`)
  if (page > lastPage) router.push(`?page=${lastPage}&per_page=${per_page}`)

  return (
    <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
      <div className="-mt-px flex w-0 flex-1">
        <PaginationPrevButton
          hasPrevPage={hasPrevPage}
          page={page}
          per_page={per_page}
        />
      </div>
      <div className="hidden md:-mt-px md:flex">
        <PaginationNumButton page={1} per_page={per_page} isActive={page > 1} />
        {page > 2 && <PaginationDelimiter />}
        <div
          className={
            "inline-flex items-center border-t-2 border-indigo-500 px-4 pt-4 text-sm font-medium text-indigo-600"
          }
        >
          {page}
        </div>
        {page < lastPage - 1 && <PaginationDelimiter />}
        <PaginationNumButton
          page={lastPage}
          per_page={per_page}
          isActive={page < lastPage}
        />
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
        <PaginationNextButton
          hasNextPage={hasNextPage}
          page={page}
          per_page={per_page}
        />
      </div>
    </nav>
  )
}

export default Pagination
