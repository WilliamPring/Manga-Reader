
import {FavoriteMangaContext} from '.'
import {ADD_FAVORITE, FAVORITE, REMOVE_FAVORITE} from './types'
import React, {useContext} from 'react'

const favoriteManga = [
  {
    id: 1,
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/en/1/14/Sangatsu_no_Lion.jpg',
    title: 'Sangatsu no Lion',
    author: 'Umino Chica',
  },
  {
    id: 2,
    imageUrl:
      'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcScQ3SvxqLuT1el0OmUisC1YiBpUhRVJQk8OeBW7LM-fpE5I4UQ',
    title: 'fullmetal alchemist',
    author: 'Umino Chica',
  },
  {
    id: 3,
    imageUrl: 'http://via.placeholder.com/160x160',
    title: 'something three',
    author: 'Umino Chica',
  },
  {
    id: 4,
    imageUrl: 'http://via.placeholder.com/160x160',
    title: 'something four',
    author: 'Umino Chica',
  },
  {
    id: 5,
    imageUrl: 'http://via.placeholder.com/160x160',
    title: 'something five',
    author: 'Umino Chica',
  },
  {
    id: 6,
    imageUrl: 'http://via.placeholder.com/160x160',
    title: 'something six',
    author: 'Umino Chica',
  },
];


const APICALLMOCK = (): Promise<any> => new Promise((resolve, reject) => {
  resolve({ userName: "prinwil", favoriteManga });
});

export const getFavoriteManga = () => {
  const context = useContext(FavoriteMangaContext);
  if (!context) {
    throw new Error(`getFavoriteManga must be used within a CountProvider`);
  }
  const [state, dispatch] = context;
  const userFavoriteMangas = () => {
    return APICALLMOCK().then(() => dispatch({ type: FAVORITE, payload: {userName: "prinwil", favoriteManga}  }))
  }

  //end
  return {
    state,
    dispatch,
    userFavoriteMangas
  };
}
