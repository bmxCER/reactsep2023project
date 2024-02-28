import {IMovie} from "./movieInterface";

export interface IMovieDetails extends IMovie{
    movieDetails: {
        id: number,
        genres_ids: number[],
        overview: string,
        title: string,
        vote_average: number,
        poster_path: string
    }

}