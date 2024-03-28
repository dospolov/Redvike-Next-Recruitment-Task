"use client"

import { useCallback, useState } from "react"
import { useResizeDetector } from "react-resize-detector"
import Grid from "cmp/Grid"
import Pagination from "cmp/Pagination"
import { Pokemon } from "@/types/Pokemon"

const RESOLUTIONS = {
  mobile: { minWidth: 0, perPage: 5 },
  sm: { minWidth: 640, perPage: 8 },
  md: { minWidth: 768, perPage: 12 },
  lg: { minWidth: 1024, perPage: 16 },
  xl: { minWidth: 1280, perPage: 20 },
}

function List({ pokemons }: { pokemons: Pokemon[] }) {
  const [perPage, setPerPage] = useState(RESOLUTIONS.mobile.perPage)
  const totalPages = Math.ceil(pokemons.length / perPage)
  const [currentPage, setCurrentPage] = useState(0)

  const setPage = useCallback(setCurrentPage, [setCurrentPage])

  const onResize = useCallback(
    (width: number | undefined, height: number | undefined) => {
      if (!width) return
      let newPerPage
      if (width < RESOLUTIONS.sm.minWidth) {
        newPerPage = RESOLUTIONS.mobile.perPage
      } else if (width < RESOLUTIONS.md.minWidth) {
        newPerPage = RESOLUTIONS.sm.perPage
      } else if (width < RESOLUTIONS.lg.minWidth) {
        newPerPage = RESOLUTIONS.md.perPage
      } else if (width < RESOLUTIONS.xl.minWidth) {
        newPerPage = RESOLUTIONS.lg.perPage
      } else {
        newPerPage = RESOLUTIONS.xl.perPage
      }
      setPerPage(newPerPage)
      setCurrentPage(0)
    },
    []
  )

  const { ref } = useResizeDetector({
    handleHeight: false,
    refreshMode: "debounce",
    refreshRate: 100,
    onResize,
  })

  return (
    <div ref={ref} className="space-y-5">
      <h1 className="px-5 mt-6 text-lg leading-8 text-gray-600">Pokedex</h1>
      <Grid
        pokemons={pokemons.slice(
          currentPage * perPage,
          currentPage * perPage + perPage
        )}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setPage={setPage}
      />
    </div>
  )
}

export default List
