const baseURL = 'https://api.themoviedb.org/';

const movies = '3/discover/movie';

const urls = {
    movies: {
        base: movies,
        byId: (id: number): string => `${movies}/${id}`
    }
};

export {
    baseURL,
    urls
};