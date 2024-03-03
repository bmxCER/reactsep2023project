import {apiService} from "./apiService";
import {IRes} from "../types/responseType";
import {IGenre} from "../interfaces/genresInterface";
import {urls} from "../constants";

const genresService = {
    getAll:(id: number): IRes<IGenre[]>=> apiService.get(urls.genres.base, {params: id})
}

export {genresService}