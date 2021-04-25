import React, { FC, useState, useEffect } from 'react';
import { FlatList, View, SafeAreaView, TextInput } from 'react-native';
import { Card } from '../../Component/MangaCard';
import { MangaCollectionProps } from '@manga-reader/dtos';
import { TopBar } from '../../Component/TopBar';
const DATAA = [
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
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}
      >
        <FlatList
          data={DATAA}
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
