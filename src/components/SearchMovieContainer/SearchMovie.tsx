import React, { FC, useEffect, useState } from "react";
import { IMovie, ISearch } from "../../interfaces";
import { useSearchParams } from "react-router-dom";
import { searchService } from "../../services/searchService";
import {Movie} from "../MoviesContainer";
import css from '../MoviesContainer/Movies.module.css'


const SearchMovie: FC<ISearch> = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [query, setQuery] = useSearchParams({});


    useEffect(() => {
        const findMovies = async () => {
            try {
                const response = await searchService.getAll(query.get('query') || '');
                setMovies(response.data.results);
            } catch (error) {
                console.error("Error fetching movies:", error);
            }
        };

        findMovies();
    }, [query]);

    return (
        <div>
            <div className={css.Movies}>
                {movies.map((movie: IMovie) => <Movie key={movie.id} movie={movie} />)}
            </div>
        </div>
    );
};

export { SearchMovie };