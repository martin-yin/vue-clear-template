/* eslint-disable */
import { MovieService, IMovieService } from '../services/moview/request'
import { moveTranslator } from '../services/moview/translators'
import Moive from '../entities/movie'

class MovieInteractor {
  constructor(private movieService: IMovieService) { }
  public async getMovieList() {
    let list = await this.movieService.getMovieList()
    if (list) {
      list = list.map((item) => new Moive(item))
    }
    console.log(list)
    return moveTranslator(list)
  }
}

const movieInteractor = new MovieInteractor(new MovieService())
export default movieInteractor
