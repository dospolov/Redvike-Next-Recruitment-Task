import { Suspense } from "react"
import Grid from "cmp/Grid"
import Pagination from "cmp/Pagination"

type Pokemon = {
  id: string
  name: string
  url: string
}

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
  const pokemons = await getFirstGen()

  return (
    <main className="pt-10 space-y-5">
      <Suspense fallback={<div>Loading...</div>}>
        <Grid pokemons={pokemons} />
      </Suspense>
      <Pagination />
    </main>
  )
}
