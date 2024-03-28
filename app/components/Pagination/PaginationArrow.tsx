import React from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"
import cn from "utils/cn"

export default function PaginationArrow({
  isNext,
  onClick,
}: {
  isNext: boolean
  onClick: () => void
}) {
  const Arrow = isNext ? ChevronRightIcon : ChevronLeftIcon

  return (
    <button
      className={cn(
        "relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0",
        isNext ? "rounded-r-md" : "rounded-l-md"
      )}
      role="button"
      data-testid={isNext ? "pagination-next" : "pagination-prev"}
    >
      <Arrow className="h-5 w-5" aria-hidden="true" />
    </button>
  )
}
