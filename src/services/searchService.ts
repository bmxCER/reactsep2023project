import {IRes} from "../types/responseType";
import {ISearch} from "../interfaces";
import {apiService} from "./apiService";
import {urls} from "../constants";

const searchService = {
    getAll: (query: string): IRes<ISearch>=> apiService.get(urls.movies.base, {params: {query}})
}

export {searchService}