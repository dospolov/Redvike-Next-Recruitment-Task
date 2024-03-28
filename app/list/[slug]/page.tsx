import type { Metadata } from "next"
import { PokemonInfo } from "@/types/Pokemon"
import Breadcrumbs from "cmp/Breadcrumbs"
import Card from "cmp/Card"

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
  const pokemon: PokemonInfo = await res.json()
  return pokemon
}

export default async function Page({ params }: { params: { slug: string } }) {
  const pokemon = await getPokemon(params.slug)

  return (
    <div className="space-y-5">
      <Breadcrumbs path={[{ name: pokemon.name }]} />
      <Card pokemon={pokemon} />
    </div>
  )
}
