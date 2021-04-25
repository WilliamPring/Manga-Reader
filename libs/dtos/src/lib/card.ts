import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
type RootStackParamList = {
  Home: { numColumns: number; mangas: Array<Manga>; };
};

type HomeScreenNavigationProp = BottomTabNavigationProp<
  RootStackParamList,
  'Home'
>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;


export type MangaCollectionProps = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
  mangas: Array<Manga>;
  numColumns?: number;
};
export interface MangaCardProps {
  title: string;
  imageUrl: string;
  author: string;
  className?: string;
  id?: string;
};
export interface MangaCardState {
  title: string;
  imageUrl: string;
  author: string;
  className?: string;
  id?: string;
};



export interface Manga {
  id: number;
  imageUrl: string;
  title: string;
  author: string;
}