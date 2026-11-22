import type { DemoMovieMainInfo } from '~/types/movie.d'

export const DEMO_MOVIE_INFO: DemoMovieMainInfo = {
  name: 'Мстители: Финал',
  countries: ['США'],
  posterInfo: {
    width: 600,
    height: 890,
    src: '/images/avengers-endgame-poster.png'
  },
  backgroundInfo: {
    width: 1500,
    height: 630,
    src: '/images/avengers-endgame-background.webp'
  },
  genre: ['фантастика', 'боевик', 'приключения'],
  duration: 181,
  actors: {
    list: [
      {
        id: 0,
        name: 'Роберт Джон Дауни-младший'
      },
      {
        id: 1,
        name: 'Крис Эванс'
      },
      {
        id: 2,
        name: 'Марк Руффало'
      },
      {
        id: 3,
        name: 'Крис Хемсворт'
      }
    ],
    isAll: false
  },
  year: 2019,
  rating: [
    {
      sourceName: 'Кинопоиск',
      sourceShortName: 'КП',
      colorClass: 'bg-black text-white',
      value: 8
    },
    {
      sourceName: 'IMDb',
      colorClass: 'bg-yellow-100 text-black',
      value: 8.4
    }
  ],
  description:
    'Оставшиеся в живых члены команды Мстителей и их союзники должны разработать новый план, ' +
    'который поможет противостоять разрушительным действиям могущественного титана Таноса. ' +
    'После наиболее масштабной и трагической битвы в истории они не могут допустить ошибку.'
}