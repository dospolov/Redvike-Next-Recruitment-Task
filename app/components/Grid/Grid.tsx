import Image from "next/image"
import Link from "next/link"

type Pokemon = {
  id: string
  name: string
  url: string
}

type GridProps = {
  pokemons: Pokemon[]
}

export default function Grid({ pokemons }: GridProps) {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      {pokemons.map((pokemon) => (
        <li key={pokemon.name} className="relative">
          <Link href={`/list/${pokemon.name}`} className="group">
            <div className="aspect-h-7 aspect-w-10 flex w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 justify-center align-middle">
              <Image
                src={`/assets/images/${pokemon.id}.png`}
                alt={pokemon.name}
                className="pointer-events-none object-contain group-hover:opacity-75 h-full w-full"
                width={200}
                height={200}
                priority={true}
              />
            </div>
            <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900 capitalize">
              {pokemon.name}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  )
}
