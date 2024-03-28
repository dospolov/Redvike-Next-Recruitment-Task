import { useRouter } from "next/navigation"

export default function PaginationNumButton({
  page,
  per_page,
  isActive,
}: {
  page: number
  per_page: number
  isActive: boolean
}) {
  const router = useRouter()
  if (!isActive) return null
  return (
    <button
      className={
        "inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
      }
      onClick={() => router.push(`?page=${page}&per_page=${per_page}`)}
    >
      {page}
    </button>
  )
}
