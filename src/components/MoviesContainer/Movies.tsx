import React, { useEffect, useState } from "react";
import { movieService } from "../../services";
import { Movie } from "./Movie";
import { IMovie } from "../../interfaces";
import { useSearchParams } from "react-router-dom";

const Movies = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [query, setQuery] = useSearchParams({ page: '1' });
    const page: string|null = query.get('page');

    useEffect(() => {
        movieService.getAll(page).then(({ data }) => {
            setMovies(data.results, page);
        });
    }, [page, query]); // Added query to the dependency array

    const prev = () => {
        const prevPage = (+page! - 1).toString();
        setQuery({ page: prevPage });
    }

    const next = () => {
        const nextPage = (+page! + 1).toString();
        setQuery({ page: nextPage });
    }

    return (
        <div>
            {movies.map(movie => <Movie key={movie.id} movie={movie} />)}
            <div>
                <button disabled={!page || page === '1'} onClick={prev}>prev</button>
            </div>
        </div>
    );
};

export { Movies };