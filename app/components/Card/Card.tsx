import React from "react"
import { PokemonInfo } from "@/types/Pokemon"
import Image from "next/image"

function Card({ pokemon }: { pokemon: PokemonInfo }) {
  return (
    <div className="overflow-hidden rounded-xl md:border border-gray-200 md:flex md:max-w-[500px] md:p-5">
      <Image
        src={`/assets/images/${pokemon.id}.png`}
        alt={pokemon.name}
        className="pointer-events-none object-contain group-hover:opacity-75 w-full h-52 md:h-auto"
        width={200}
        height={200}
        priority={true}
      />
      <div className="p-5 w-full">
        <h3 className="capitalize text-base font-medium leading-8 text-gray-900">
          {pokemon.name}
        </h3>
        <ul className="divide-y divide-gray-200 leading-10 text-sm *:flex *:w-full *:justify-between [&>li>dt]:text-gray-500">
          <li>
            <dt>Types</dt>
            <dd>{pokemon.types.map((t) => t.type.name)?.join(", ")}</dd>
          </li>
          <li>
            <dt>Height</dt>
            <dd>{pokemon.height}</dd>
          </li>
          <li>
            <dt>Weight</dt>
            <dd>{pokemon.weight}</dd>
          </li>
          <li>
            <dt>HP</dt>
            <dd>{pokemon.stats[0].base_stat}</dd>
          </li>
          <li>
            <dt>Attack</dt>
            <dd>{pokemon.stats[1].base_stat}</dd>
          </li>
          <li>
            <dt>Defense</dt>
            <dd>{pokemon.stats[2].base_stat}</dd>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Card
