"use client"

import React from "react"
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid"
import { useRouter, useSearchParams } from "next/navigation"

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

  const page = searchParams.get("page") ?? "1"
  const per_page = searchParams.get("per_page") ?? "5"

  return (
    <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
      <div className="-mt-px flex w-0 flex-1">
        <button
          className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 disabled:hidden"
          disabled={!hasPrevPage}
          onClick={() =>
            router.push(`?page=${Number(page) - 1}&per_page=${per_page}`)
          }
        >
          <ArrowLongLeftIcon
            className="mr-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
          Previous
        </button>
      </div>
      <div className="hidden md:-mt-px md:flex">
        <button
          className="inline-flex items-center border-t-2 border-indigo-500 px-4 pt-4 text-sm font-medium text-indigo-600"
          aria-current="page"
        >
          2
        </button>
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
        <button
          className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 disabled:hidden"
          disabled={!hasNextPage}
          onClick={() =>
            router.push(`?page=${Number(page) + 1}&per_page=${per_page}`)
          }
        >
          Next
          <ArrowLongRightIcon
            className="ml-3 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </button>
      </div>
    </nav>
  )
}

export default Pagination
