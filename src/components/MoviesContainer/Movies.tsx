import React, {FC, useEffect, useState} from "react";
import {IApiResponse, IMovie} from "../../interfaces";
import { useSearchParams } from "react-router-dom";

import { movieService } from "../../services";
import { Movie } from "./Movie";
import css from './Movies.module.css'



const Movies: FC<IApiResponse> = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);
    const [query, setQuery] = useSearchParams({ page: '1' });
    const pageQueryParam: string | null = query.get('page');
    const page: number = pageQueryParam ? parseInt(pageQueryParam) : 1;

    useEffect(() => {
        setQuery({ page: page.toString() });
        movieService.getAll(page).then(({data}) => {
            setQuery({ page: page.toString() });
            setMovies(data.results);
        });
    }, [page, setQuery]);

    const prev = () => {
        const prevPage = Math.max(page - 1, 1).toString();
        setQuery({ page: prevPage });
    }

    const next = () => {
        const nextPage = (page + 1).toString();
        setQuery({ page: nextPage });
    }

    return (
        <div>
            <div className={css.Movies}>
                {movies.map((movie: IMovie) => <Movie key={movie.id} movie={movie} />)}
            </div>
            <div className={css.buttons}>
                <button disabled={!page || page === 1} onClick={prev} className={css.button}>prev</button>
                <div className={css.page}>{page}</div>
                <button onClick={next} className={css.button}>next</button>
            </div>
        </div>
    );
};

export { Movies };