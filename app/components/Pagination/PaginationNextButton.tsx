import React from "react"
import { ArrowLongRightIcon } from "@heroicons/react/20/solid"
import { useRouter } from "next/navigation"

export default function PaginationNextButton({
  hasNextPage,
  page,
  per_page,
}: {
  hasNextPage: boolean
  page: number
  per_page: number
}) {
  const router = useRouter()
  return (
    <button
      className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 disabled:hidden"
      disabled={!hasNextPage}
      onClick={() => router.push(`?page=${page + 1}&per_page=${per_page}`)}
    >
      Next
      <ArrowLongRightIcon
        className="ml-3 h-5 w-5 text-gray-400"
        aria-hidden="true"
      />
    </button>
  )
}
