import React, { useEffect, useState } from "react";
import { movieService } from "../../services";
import { Movie } from "./Movie";
import { IMovie } from "../../interfaces";
import { useSearchParams } from "react-router-dom";

const Movies = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [query, setQuery] = useSearchParams({ page: '1' });
    const pageQueryParam: string | null = query.get('page');
    const page: number = pageQueryParam ? parseInt(pageQueryParam) : 1;

    useEffect(() => {
        setQuery({page: page.toString()})
        movieService.getAll(page).then(({ data }) => {
            setMovies(data.results)
        });
    }, [page, query])

    const prev = () => {
        const prevPage = (+page! - 1).toString();
        setQuery({ page: prevPage })
    }

    const next = () => {
        const nextPage = (+page! + 1).toString();
        setQuery({ page: nextPage })
    }

    return (
        <div>
            {movies.map((movie: IMovie) => <Movie key={movie.id} movie={movie} />)}
            <div>
                <button disabled={!page || page === 1} onClick={prev}>prev</button>
                <button onClick={next}>next</button>
            </div>
        </div>
    );
};

export { Movies };