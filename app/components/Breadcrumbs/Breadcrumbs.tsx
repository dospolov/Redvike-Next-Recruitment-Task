import Link from "next/link"
import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid"

type Crumbs = {
  name: string
}

export default function Breadcrumbs({ path }: { path: Crumbs[] }) {
  return (
    <nav className="flex p-5" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <Link href="/" className="text-gray-400 hover:text-gray-500">
            <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {path.map((crumb) => (
          <li key={crumb.name}>
            <div className="flex items-center">
              <ChevronRightIcon
                className="h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              <span className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700 capitalize">
                {crumb.name}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}
