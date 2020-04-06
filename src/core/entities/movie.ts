/* eslint-disable */
import { IMovie } from '@/types'
import { IActor } from '@/types/movie'

export default class Moive {
  public id: Number;
  public title: String;
  public genres: Array<String>;
  public collectCount: Number;
  public mainlandPubdate: String;
  public images: String;
  public casts: Array<IActor>;
  public directors: Array<IActor>;

  constructor(movie: IMovie) {
    this.id = movie.id
    this.title = movie.title
    this.genres = movie.genres
    this.collectCount = movie.collectCount
    this.mainlandPubdate = movie.mainlandPubdate
    this.images = movie.images
    this.casts = movie.casts
    this.directors = movie.directors
  }
}
