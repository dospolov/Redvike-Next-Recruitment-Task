import { Suspense } from "react"
import List from "./List"
import { RESOLUTIONS } from "app/constants"
import { Pokemon } from "@/types/Pokemon"

const addIdsToPokemons = (pokemons: Pokemon[]) => {
  return pokemons.map(({ name, url }: { name: string; url: string }) => {
    const id = url.split("/").at(-2)
    if (!id) throw new Error("No id found")
    return { name, url, id }
  })
}

async function getFirstGen() {
  const res = await fetch(`https://pokeapi.co/api/v2/generation/1`)
  const { pokemon_species } = await res.json()

  return addIdsToPokemons(pokemon_species)
}

export default async function Home() {
  const pokemons: Pokemon[] = await getFirstGen()

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <List pokemons={pokemons} />
    </Suspense>
  )
}
