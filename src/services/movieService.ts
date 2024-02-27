import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types/responseType";
import {IMovie} from "../interfaces";

const movieService = {
    getAll: (page: number): IRes<IMovie[]>=> apiService.get(urls.movies, {params: {page}}),
}

export {movieService}