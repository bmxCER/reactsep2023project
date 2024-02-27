import {IRes} from "../types/responseType";
import {IMovieDetails} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const movieDetailsService = {
    getById: (id:number): IRes<IMovieDetails> => apiService.get(urls.movie.byId(id))
}

export {movieDetailsService}