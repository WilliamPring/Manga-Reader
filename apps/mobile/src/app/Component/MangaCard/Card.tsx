import React, { FC } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { MangaCardProps } from '@manga-reader/dtos';
export const Card: FC<MangaCardProps> = ({
  title,
  imageUrl,
  author,
  className = '',
  id,
}) => {
  return (
    <View style={styles.mangaCard}>
      <Image source={{ uri: imageUrl }} style={styles.mangaCardImage} />
      <View style={styles.mangaCardTextBottom}>
        <Text>{title}</Text>
        <Text>{author}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mangaCard: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: '#f0f0f0',
    margin: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  mangaCardImage: {
    resizeMode: 'stretch',
    width: '100%',
    height: undefined,
    aspectRatio: 1,
  },
  mangaCardTextBottom: {
    width: '100%',
    flexGrow: 1,
  },
});
