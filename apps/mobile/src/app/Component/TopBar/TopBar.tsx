import React, { FC, useState, Dispatch, SetStateAction } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

interface ITopBarProps {
  title: string;
  setSearchQuery?: Dispatch<SetStateAction<string>>;
  searchQuery?: string;
}

export const TopBar: FC<ITopBarProps> = ({
  title,
  setSearchQuery,
  searchQuery = '',
}) => {
  const handleSearch = (text) => {
    setSearchQuery(text);
  };
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        clearButtonMode="always"
        value={searchQuery}
        onChangeText={(queryText) => handleSearch(queryText)}
        placeholder="Search"
        style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'space-between', // center, space-around
    paddingLeft: 10,
  },
});
