const baseURL = 'https://api.themoviedb.org/3';

const movies = '/discover/movie';
const movie = '/movie'
const search = '/search/keyword'
const genres = '/genre/movie/list'

const urls = {
    movies: {
      base: movies
    },
    movie: {
        base: movie,
        byId: (id: number): string => `${movie}/${id}`
    },
    search: {
        base: search
    },
    genres:{
        base: genres
    }
};

export {
    baseURL,
    urls
};