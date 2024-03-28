export default function PaginationNum({
  page,
  totalPages,
  setPage,
}: {
  page: number
  totalPages: number
  setPage: (from: number) => void
}) {
  return (
    <button
      className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
      onClick={() => setPage(page)}
    >
      {page + 1}
    </button>
  )
}
