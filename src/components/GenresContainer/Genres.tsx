import React, {FC, useContext} from "react";
import { IGenre } from "../../interfaces/genresInterface";
import { IMovie } from "../../interfaces";
import { Movie } from "../MoviesContainer";
import {Context} from "../../hoc/ContextProvider";

interface IProps {
    genres: IGenre[];
    movies: IMovie[];
}

const Genres: FC<IProps> = ({ genres, movies }) => {
    const {genresWith} = useContext(Context)
    const selectedGenreId = genresWith ? genresWith.map(id => parseInt(id)) : undefined;

    const filteredMovies = selectedGenreId
        ? movies.filter(movie => movie.genres_ids.some(id => selectedGenreId.includes(id)))
        : movies;
    return (
        <div>
            {filteredMovies.map(movie => (
                <Movie key={movie.id} movie={movie} />
            ))}

        </div>
    );
};

export { Genres };