import Image from "next/image"
import Link from "next/link"
import cn from "utils/cn"

type Pokemon = {
  id: string
  name: string
  url: string
}

type GridProps = {
  pokemons: Pokemon[]
  itemsToDisplay: number
}

export default function Grid({ pokemons, itemsToDisplay }: GridProps) {
  return (
    <ul
      role="list"
      className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
    >
      {pokemons.map((pokemon, i) => (
        <li
          key={pokemon.name}
          className={cn(
            "relative bg-gray-200 text-center p-5 m-5",
            i > itemsToDisplay - 1 && "hidden"
          )}
        >
          <Link href={`/list/${pokemon.name}`} className="group">
            <Image
              src={`/assets/images/${pokemon.id}.png`}
              alt={pokemon.name}
              className="group-hover:opacity-75 w-full h-28 object-contain"
              width={200}
              height={200}
              priority={true}
            />
            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900 capitalize">
              {pokemon.name}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  )
}
