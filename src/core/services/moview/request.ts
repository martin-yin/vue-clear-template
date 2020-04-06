/* eslint-disable */
import http from '../http'
import { IMovie } from '@/types'
export interface IMovieService {
  getMovieList(): Promise<IMovie[]>;
}

export class MovieService implements IMovieService {
  public async getMovieList(): Promise<any> {
    const { data: { subjects } } = await http({
      method: 'get',
      url: '/api/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a',
      data: {}
    })
    return subjects
  }
}
