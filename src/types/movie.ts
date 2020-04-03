export interface IMovie {
  id: Number;
  title: String;
  genres: Array<String>;
  collectCount: number;
  mainlandPubdate: String;
  images: String;
  casts: Array<IActor>;
  directors: Array<IActor>;
}

export interface IActor {
  avatars: String;
  nameEn: String;
  name: String;
  alt: String;
  id: Number
}


export interface ImageSize {
  small: String
  large: String;
  medium: String;
}