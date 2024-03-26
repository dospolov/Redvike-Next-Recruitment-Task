import type { Metadata, ResolvingMetadata } from "next"

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
  return res.json()
}

export default async function Page({ params }: { params: { slug: string } }) {
  const pokemon = await getPokemon(params.slug)
  console.log(pokemon)

  return <div>My Post:</div>
}
