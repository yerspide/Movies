import type { MoviesSourceInfo } from '~/types/movie.d'

export const MOVIES_SOURCES: Record<string, MoviesSourceInfo> = {
  kinopoisk: {
    id: 0,
    name: 'Кинопоиск',
    shortName: 'КП',
    description: 'Рейтинги, описания, прокат в России',
    spotClass: 'bg-yellow-400'
  },
  TMDb: {
    id: 1,
    name: 'TMDb',
    description: 'Постеры, метаданные и переводы на другие языки, если их нет на Кинопоиске',
    spotClass: 'bg-red-700'
  },
  IMDb: {
    id: 2,
    name: 'IMDb',
    description: 'Актёрский состав и рейтинг',
    spotClass: 'bg-green-600'
  }
}
