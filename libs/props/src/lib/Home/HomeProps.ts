import {HomeScreenNavigationProp, HomeScreenRouteProp} from './Navigation'

export type MangaCollectionProps = {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
  mangas: Array<MangaProps>;
  numColumns?: number;
};

export interface MangaCardProps {
  title: string;
  imageUrl: string;
  author: string;
  className?: string;
  id?: string;
};

export interface MangaProps {
  id: number;
  imageUrl: string;
  title: string;
  author: string;
}