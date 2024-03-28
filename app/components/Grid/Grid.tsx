import { memo } from "react"
import Image from "next/image"
import Link from "next/link"
import { Pokemon } from "@/types/Pokemon"

export default memo(function Grid({ pokemons }: { pokemons: Pokemon[] }) {
  return (
    <div
      role="list"
      className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
    >
      {pokemons.map((pokemon, i) => (
        <Link
          href={`/pokemon/${pokemon.name}`}
          className="group relative bg-gray-200 hover:bg-gray-100 text-center p-5"
          key={pokemon.name}
        >
          <Image
            src={`/assets/images/${pokemon.id}.png`}
            alt={pokemon.name}
            className="group-hover:opacity-75 w-full h-16 object-contain group-hover:scale-125 transition duration-200"
            width={200}
            height={200}
            priority={true}
          />
          <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900 capitalize">
            {pokemon.name}
          </p>
        </Link>
      ))}
    </div>
  )
})
