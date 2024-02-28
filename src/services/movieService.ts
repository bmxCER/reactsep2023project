import {apiService} from "./apiService";
import {urls} from "../constants";
import {IMovie} from "../interfaces";
import {IRes} from "../types/responseType";


const movieService = {
    getAll: (page: number): IRes<IMovie[]>=> apiService.get(urls.movies.base, {params: {page}}),
}

export {movieService}