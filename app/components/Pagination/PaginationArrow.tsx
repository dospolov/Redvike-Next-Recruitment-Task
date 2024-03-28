import React from "react"
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid"
import { useRouter } from "next/navigation"

export default function PaginationArrow({
  isDisabled,
  page,
  per_page,
  isNext,
}: {
  isDisabled: boolean
  page: number
  per_page: number
  isNext: boolean
}) {
  const router = useRouter()
  const Arrow = isNext ? ArrowLongRightIcon : ArrowLongLeftIcon
  const direction = isNext ? page + 1 : page - 1

  return (
    <button
      className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 disabled:hidden"
      disabled={isDisabled}
      onClick={() => router.push(`?page=${direction}&per_page=${per_page}`)}
    >
      <Arrow className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
    </button>
  )
}
