import { Suspense } from "react"
import { RESOLUTIONS } from "app/constants"
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
  const pokemons = await getFirstGen()

  const page = Number(searchParams["page"] ?? "1")
  const start = (page - 1) * RESOLUTIONS.xl.perPage
  const end = start + RESOLUTIONS.xl.perPage
  const entries = pokemons.slice(start, end)

  return (
    <main className="space-y-5">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="sm:hidden">
          <Grid pokemons={entries.slice(0, RESOLUTIONS.mobile.perPage)} />
        </div>
        <div className="hidden sm:block md:hidden">
          <Grid pokemons={entries.slice(0, RESOLUTIONS.sm.perPage)} />
        </div>
        <div className="hidden md:block lg:hidden">
          <Grid pokemons={entries.slice(0, RESOLUTIONS.md.perPage)} />
        </div>
        <div className="hidden lg:block xl:hidden">
          <Grid pokemons={entries.slice(0, RESOLUTIONS.lg.perPage)} />
        </div>
        <div className="hidden xl:block">
          <Grid pokemons={entries.slice(0, RESOLUTIONS.xl.perPage)} />
        </div>
      </Suspense>
      <Pagination itemsCount={pokemons.length} />
    </main>
  )
}
