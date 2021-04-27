
export interface UserFavoriteMangaResponseDto {
  userName: string;
  favoriteManga: MangaDto[];
}

export interface MangaDto {
  id: number;
  imageUrl: string;
  title: string;
  author: string;
}