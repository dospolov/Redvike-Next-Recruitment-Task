export default function PaginationNum({
  page,
  setPage,
}: {
  page: number
  setPage: (from: number) => void
}) {
  return (
    <button
      className={
        "inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
      }
      onClick={() => setPage(page)}
    >
      {page + 1}
    </button>
  )
}
