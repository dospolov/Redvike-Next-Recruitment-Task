"use client"

import { useCallback, useState } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { useResizeDetector } from "react-resize-detector"
import { RESOLUTIONS } from "app/constants"
import PaginationDelimiter from "./PaginationDelimiter"
import PaginationArrow from "./PaginationArrow"
import PaginationNum from "./PaginationNum"

const DEFAULT_PAGE = "1"
const DEFAULT_PER_PAGE = "20"

function Pagination({ itemsCount }: { itemsCount: number }) {
  const searchParams = useSearchParams()
  const [page, setPage] = useState(
    Number(searchParams.get("page") ?? DEFAULT_PAGE)
  )
  const [perPage, setPerPage] = useState(
    Number(searchParams.get("per_page") ?? RESOLUTIONS.mobile.perPage)
  )

  const router = useRouter()
  const onResize = useCallback(
    (width: number | undefined, height: number | undefined) => {
      console.log(width, height)
      if (!width) return
      if (width < RESOLUTIONS.sm.minWidth) {
        setPerPage(RESOLUTIONS.mobile.perPage)
      } else if (width < RESOLUTIONS.md.minWidth) {
        setPerPage(RESOLUTIONS.sm.perPage)
      } else if (width < RESOLUTIONS.lg.minWidth) {
        setPerPage(RESOLUTIONS.md.perPage)
      } else if (width < RESOLUTIONS.xl.minWidth) {
        setPerPage(RESOLUTIONS.lg.perPage)
      } else {
        setPerPage(RESOLUTIONS.xl.perPage)
      }
    },
    []
  )

  const start = (Number(page) - 1) * Number(DEFAULT_PER_PAGE)
  const end = start + Number(DEFAULT_PER_PAGE)

  const hasNextPage = end < itemsCount
  const hasPrevPage = start > 0

  const { width, height, ref } = useResizeDetector({
    handleHeight: false,
    refreshMode: "debounce",
    refreshRate: 100,
    onResize,
  })

  const lastPage = Math.ceil(itemsCount / perPage)

  if (page <= 0 || isNaN(page)) router.push(`?page=1&per_page=${perPage}`)
  if (page > lastPage) router.push(`?page=${lastPage}&per_page=${perPage}`)

  return (
    <>
      <div className="text-xl">
        <div>perPage: {perPage}</div>
        <div>page: {page}</div>
      </div>
      <nav
        className="flex items-center justify-center border-t border-gray-200 px-4 sm:px-0"
        ref={ref}
      >
        <PaginationArrow
          isDisabled={!hasPrevPage}
          page={page}
          per_page={perPage}
          isNext={false}
        />
        <PaginationNum page={1} per_page={perPage} isActive={page > 1} />
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
          per_page={perPage}
          isActive={page < lastPage}
        />
        <PaginationArrow
          isDisabled={!hasNextPage}
          page={page}
          per_page={perPage}
          isNext={true}
        />
      </nav>
    </>
  )
}

export default Pagination
