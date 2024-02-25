export interface IMovie{
        id: number,
        genres_ids: number[],
        overview: string,
        title: string,
        vote_average: number,
        poster_path: string

    page: number;
}