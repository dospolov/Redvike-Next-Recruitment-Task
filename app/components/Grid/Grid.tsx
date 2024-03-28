import { memo } from "react"
import Image from "next/image"
import Link from "next/link"
import { Pokemon } from "@/types/Pokemon"

export default memo(function Grid({ pokemons }: { pokemons: Pokemon[] }) {
  return (
    <>
      <ul
        role="list"
        className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        {pokemons.map((pokemon, i) => (
          <li
            key={pokemon.name}
            className={"relative bg-gray-200 text-center p-5"}
          >
            <Link href={`/list/${pokemon.name}`} className="group">
              <Image
                src={`/assets/images/${pokemon.id}.png`}
                alt={pokemon.name}
                className="group-hover:opacity-75 w-full h-16 object-contain"
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
    </>
  )
})
