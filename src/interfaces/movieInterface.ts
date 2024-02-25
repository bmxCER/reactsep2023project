export interface IMovie{
    results: [
        id: number,
        genres_ids: number[],
        overview: string,
        title: string,
        vote_average: number,
    ]
    page: number;
}