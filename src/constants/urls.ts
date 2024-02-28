const baseURL = 'https://api.themoviedb.org/3';

const movies = '/discover/movie';
const movie = '/movie'
const urls = {
    movies: {
      base: movies
    },
    movie: {
        base: movie,
        byId: (id: number): string => `${movie}/${id}`
    }
};

export {
    baseURL,
    urls
};