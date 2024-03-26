import type { Metadata } from "next"
import Image from "next/image"
import { Pokemon } from "@/types/Pokemon"

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `${params.slug} - Pokemon Wiki`,
  }
}

async function getPokemon(name: string) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
  if (!res.ok) {
    throw new Error("Failed to fetch user data")
  }
  const pokemon: Pokemon = await res.json()
  return pokemon
}

export default async function Page({ params }: { params: { slug: string } }) {
  const pokemon = await getPokemon(params.slug)

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 flex max-w-[500px] p-5">
      <Image
        src={`/assets/images/${pokemon.id}.png`}
        alt=""
        className="pointer-events-none object-contain group-hover:opacity-75"
        width={200}
        height={200}
        loading="lazy"
      />
      <ul className="divide-y divide-gray-200 p-5 w-full leading-10 *:flex *:w-full *:justify-between">
        <li>
          <span>Types</span>
          <span>{pokemon.types.map((t) => t.type.name)?.join(", ")}</span>
        </li>
        <li>
          <span>Height</span>
          <span>{pokemon.height}</span>
        </li>
        <li>
          <span>Weight</span>
          <span>{pokemon.weight}</span>
        </li>
        <li>
          <span>HP</span>
          <span>{pokemon.stats[0].base_stat}</span>
        </li>
        <li>
          <span>Attack</span>
          <span>{pokemon.stats[1].base_stat}</span>
        </li>
        <li>
          <span>Defense</span>
          <span>{pokemon.stats[2].base_stat}</span>
        </li>
      </ul>
    </div>
  )
}
