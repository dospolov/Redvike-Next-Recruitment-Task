export type AbilityDetails = {
  name: string
  url: string
}

export type Ability = {
  is_hidden: boolean
  slot: number
  ability: AbilityDetails
}

export type Form = {
  name: string
  url: string
}

export type Version = {
  name: string
  url: string
}

export type GameIndice = {
  game_index: number
  version: Version
}

export type Item = {
  name: string
  url: string
}

export type Version2 = {
  name: string
  url: string
}

export type VersionDetail = {
  rarity: number
  version: Version2
}

export type HeldItem = {
  item: Item
  version_details: VersionDetail[]
}

export type Move2 = {
  name: string
  url: string
}

export type VersionGroup = {
  name: string
  url: string
}

export type MoveLearnMethod = {
  name: string
  url: string
}

export type VersionGroupDetail = {
  level_learned_at: number
  version_group: VersionGroup
  move_learn_method: MoveLearnMethod
}

export type Move = {
  move: Move2
  version_group_details: VersionGroupDetail[]
}

export type Species = {
  name: string
  url: string
}

export type DreamWorld = {
  front_default: string
  front_female?: any
}

export type Home = {
  front_default: string
  front_female?: any
  front_shiny: string
  front_shiny_female?: any
}

export type OfficialArtwork = {
  front_default: string
}

export type Other = {
  dream_world: DreamWorld
  home: Home
  official_artwork: OfficialArtwork
}

export type RedBlue = {
  back_default: string
  back_gray: string
  front_default: string
  front_gray: string
}

export type Yellow = {
  back_default: string
  back_gray: string
  front_default: string
  front_gray: string
}

export type GenerationI = {
  red_blue: RedBlue
  yellow: Yellow
}

export type Crystal = {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
}

export type Gold = {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
}

export type Silver = {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
}

export type GenerationIi = {
  crystal: Crystal
  gold: Gold
  silver: Silver
}

export type Emerald = {
  front_default: string
  front_shiny: string
}

export type FireredLeafgreen = {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
}

export type RubySapphire = {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
}

export type GenerationIii = {
  emerald: Emerald
  firered_leafgreen: FireredLeafgreen
  ruby_sapphire: RubySapphire
}

export type DiamondPearl = {
  back_default: string
  back_female?: any
  back_shiny: string
  back_shiny_female?: any
  front_default: string
  front_female?: any
  front_shiny: string
  front_shiny_female?: any
}

export type HeartgoldSoulsilver = {
  back_default: string
  back_female?: any
  back_shiny: string
  back_shiny_female?: any
  front_default: string
  front_female?: any
  front_shiny: string
  front_shiny_female?: any
}

export type Platinum = {
  back_default: string
  back_female?: any
  back_shiny: string
  back_shiny_female?: any
  front_default: string
  front_female?: any
  front_shiny: string
  front_shiny_female?: any
}

export type GenerationIv = {
  diamond_pearl: DiamondPearl
  heartgold_soulsilver: HeartgoldSoulsilver
  platinum: Platinum
}

export type Animated = {
  back_default: string
  back_female?: any
  back_shiny: string
  back_shiny_female?: any
  front_default: string
  front_female?: any
  front_shiny: string
  front_shiny_female?: any
}

export type BlackWhite = {
  animated: Animated
  back_default: string
  back_female?: any
  back_shiny: string
  back_shiny_female?: any
  front_default: string
  front_female?: any
  front_shiny: string
  front_shiny_female?: any
}

export type GenerationV = {
  black_white: BlackWhite
}

export type OmegarubyAlphasapphire = {
  front_default: string
  front_female?: any
  front_shiny: string
  front_shiny_female?: any
}

export type XY = {
  front_default: string
  front_female?: any
  front_shiny: string
  front_shiny_female?: any
}

export type GenerationVi = {
  omegaruby_alphasapphire: OmegarubyAlphasapphire
  x_y: XY
}

export type Icons = {
  front_default: string
  front_female?: any
}

export type UltraSunUltraMoon = {
  front_default: string
  front_female?: any
  front_shiny: string
  front_shiny_female?: any
}

export type GenerationVii = {
  icons: Icons
  ultra_sun_ultra_moon: UltraSunUltraMoon
}

export type Icons2 = {
  front_default: string
  front_female?: any
}

export type GenerationViii = {
  icons: Icons2
}

export type Versions = {
  generation_i: GenerationI
  generation_ii: GenerationIi
  generation_iii: GenerationIii
  generation_iv: GenerationIv
  generation_v: GenerationV
  generation_vi: GenerationVi
  generation_vii: GenerationVii
  generation_viii: GenerationViii
}

export type Sprites = {
  back_default: string
  back_female?: any
  back_shiny: string
  back_shiny_female?: any
  front_default: string
  front_female?: any
  front_shiny: string
  front_shiny_female?: any
  other: Other
  versions: Versions
}

export type StatDetails = {
  name: string
  url: string
}

export type Stat = {
  base_stat: number
  effort: number
  stat: StatDetails
}

export type TypeDetails = {
  name: string
  url: string
}

export type Type = {
  slot: number
  type: TypeDetails
}

export type Generation = {
  name: string
  url: string
}

export type PastTypeDetails = {
  name: string
  url: string
}
export type PastType = {
  slot: number
  type: PastTypeDetails
}

export type PastTypes = {
  generation: Generation
  types: PastType[]
}

export type Pokemon = {
  id: string
  name: string
  url: string
}

export type PokemonInfo = {
  id: number
  name: string
  base_experience: number
  height: number
  is_default: boolean
  order: number
  weight: number
  abilities: Ability[]
  forms: Form[]
  game_indices: GameIndice[]
  held_items: HeldItem[]
  location_area_encounters: string
  moves: Move[]
  species: Species
  sprites: Sprites
  stats: Stat[]
  types: Type[]
  past_types: PastType[]
}
