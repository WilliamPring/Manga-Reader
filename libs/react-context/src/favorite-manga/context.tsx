import React, { useContext, createContext, useMemo, useReducer } from 'react';
import { favoriteManga } from '.';

interface FavoriteMangaContext {
  userName: string;
  favoriteManga: {
    id: number;
    imageUrl: string;
    title: string;
    author: string;
  }[];
}

export const FavoriteMangaContext = createContext(null);

export const FavoriteMangaProvider = (props) => {
  const [state, dispatch] = useReducer(favoriteManga, []);
  const value = useMemo(() => [state, dispatch], [state]);
  return <FavoriteMangaContext.Provider value={value} {...props} />;
};
