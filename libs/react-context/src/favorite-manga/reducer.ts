

import {UserFavoriteMangaResponseDto} from '@manga-reader/dtos'

export const favoriteManga = (state, action: {
    type: string;
    payload?: unknown;
}) => {

  switch (action.type) {
    case 'FAVORITE': {
      const favMangaResp = action.payload as UserFavoriteMangaResponseDto
      return {...state, favoriteManga: favMangaResp.favoriteManga}
    }
    case 'FILTER': {
      return {
        filter: {...state}
      }
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`)
    }
  }
}