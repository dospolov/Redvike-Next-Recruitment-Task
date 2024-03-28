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

export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const page = searchParams["page"] ?? "1"
  const per_page = searchParams["per_page"] ?? "5"

  const start = (Number(page) - 1) * Number(per_page)
  const end = start + Number(per_page)

  const pokemons = await getFirstGen()
  const entries = pokemons.slice(start, end)

  return (
    <main className="space-y-5">
      <Suspense fallback={<div>Loading...</div>}>
        <Grid pokemons={entries} />
      </Suspense>
      <Pagination
        hasNextPage={end < pokemons.length}
        hasPrevPage={start > 0}
        itemsCount={pokemons.length}
      />
    </main>
  )
}
