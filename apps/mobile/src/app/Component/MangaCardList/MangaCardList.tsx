import React, { FC, useEffect } from 'react';
import { FlatList, View, SafeAreaView, TextInput } from 'react-native';
import { Card } from '../../Component/MangaCard';
import { getFavoriteManga } from '@manga-reader/react-context';
import { filter, contains } from 'lodash';
export const MangaCardList: FC<{
  numColumns: number;
  searchQuery?: string;
}> = ({ numColumns = 2, searchQuery = '' }) => {
  const { state, dispatch, userFavoriteMangas } = getFavoriteManga();
  useEffect(() => {
    userFavoriteMangas();
  }, []);
  const filterManga = filter(state.favoriteManga, (g) =>
    g.title.includes(searchQuery)
  );

  return (
    <SafeAreaView>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}
      >
        <FlatList
          data={filterManga}
          contentContainerStyle={{
            marginLeft: 10,
            marginTop: 10,
            marginRight: 10,
            marginBottom: 10,
          }}
          renderItem={({ item }) => (
            <Card
              imageUrl={item.imageUrl}
              author={item.author}
              title={item.title}
            />
          )}
          numColumns={numColumns}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};
