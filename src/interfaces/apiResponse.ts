import {IMovie} from "./movieInterface";

export interface IApiResponse {
    results: IMovie[]
    page: number;
}