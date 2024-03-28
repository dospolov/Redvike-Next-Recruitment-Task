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

const DEFAULT_PER_PAGE = 20

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const page = searchParams["page"] ?? "1"

  const start = (Number(page) - 1) * Number(DEFAULT_PER_PAGE)
  const end = start + Number(DEFAULT_PER_PAGE)

  const pokemons = await getFirstGen()
  const entries = pokemons.slice(start, end)

  return (
    <main className="space-y-5">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="sm:px-6 lg:px-8 md:hidden">
          <Grid pokemons={entries} itemsToDisplay={5} />
        </div>
        <div className="sm:px-6 lg:px-8 hidden md:block">
          <Grid pokemons={entries} itemsToDisplay={20} />
        </div>
      </Suspense>
      <Pagination
        hasNextPage={end < pokemons.length}
        hasPrevPage={start > 0}
        itemsCount={pokemons.length}
      />
    </main>
  )
}
