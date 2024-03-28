import React from "react"
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid"

export default function PaginationArrow({
  isDisabled,
  isNext,
  onClick,
}: {
  isDisabled: boolean
  isNext: boolean
  onClick: () => void
}) {
  const Arrow = isNext ? ArrowLongRightIcon : ArrowLongLeftIcon

  return (
    <button
      className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 disabled:hidden"
      disabled={isDisabled}
      onClick={onClick}
    >
      <Arrow className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
    </button>
  )
}
