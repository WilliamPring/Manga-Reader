import React, { FC, useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { MangaCollectionProps } from '@manga-reader/props';
import { TopBar } from '../../Component/TopBar';
import { FavoriteMangaProvider } from '@manga-reader/react-context';
import { MangaCardList } from '../../Component/MangaCardList';
export const MangaCollection: FC<MangaCollectionProps> = ({
  mangas,
  numColumns = 2,
  navigation,
  route,
}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  return (
    <SafeAreaView>
      <TopBar
        title={route.name}
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
      />
      <FavoriteMangaProvider>
        <MangaCardList numColumns={2} searchQuery={searchQuery}></MangaCardList>
      </FavoriteMangaProvider>
    </SafeAreaView>
  );
};
