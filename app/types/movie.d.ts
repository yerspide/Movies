import type { VueClassType } from "."

export interface MoviesSourceInfo {
  id: number
  shortName?: string
  name: string
  description: string
  spotClass?: VueClassType
}

export interface MovieRating {
  sourceName: string
  sourceShortName?: string
  colorClass?: VueClassType
  value: number
}

export interface MediaInfo {
  width: number
  height: number
  src: string
}

export interface DemoMovieMainInfo {
  name: string
  description: string
  posterInfo: MediaInfo
  backgroundInfo: MediaInfo
  year: number
  duration: number
  countries: string[]
  actors: {
    list: { id: number, name: string }[],
    isAll: false
  }
  genre: string[]
  rating: MovieRating[]
}