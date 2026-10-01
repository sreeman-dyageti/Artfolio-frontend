export interface Artwork {
  id: number;
  title: string;
  artist: string;
  location: string;
  year: number;
  medium: string;
  dimensions: string;
  price: string;
  genre: string;
  collection: string;
  image: string;
  note: string;
}

export interface Collection {
  title: string;
  count: string;
  descriptor: string;
  artists: string;
}