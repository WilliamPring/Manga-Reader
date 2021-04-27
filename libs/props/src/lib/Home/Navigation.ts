import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import {MangaDto} from '@manga-reader/dtos'
export type RootStackParamList = {
  Home: { numColumns: number; mangas: Array<MangaDto>; };
};

export type HomeScreenNavigationProp = BottomTabNavigationProp<
  RootStackParamList,
  'Home'
>;
export type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;