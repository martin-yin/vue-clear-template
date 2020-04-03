/* eslint-disable */
import { MovieService, IMovieService } from '../services/moview/request'
import { moveTranslator } from '../services/moview/translators'

class MovieInteractor {
  constructor(private movieService: IMovieService) { }
  public async getMovieList() {
    const list = await this.movieService.getMovieList()
    return moveTranslator(list)
  }
}

const movieInteractor = new MovieInteractor(new MovieService())
export default movieInteractor
