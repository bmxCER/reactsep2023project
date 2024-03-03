import {FC, PropsWithChildren} from "react";

import {NavLink} from "react-router-dom";
import {IMovie} from "../../interfaces";
import css from './Movie.module.css'

interface IMovieProps extends PropsWithChildren {
    movie: IMovie
}

const Movie: FC<IMovieProps> = ({movie}) => {
    const {id, title, poster_path} = movie
    const poster = `https://image.tmdb.org/t/p/w500${poster_path}`


    return (
        <div className={css.Movie}>
            <NavLink to={`/movie/${id}`} className={css.title}>
                <img src={`${poster}`} alt={`${title}`}/>
                <div>{title}</div>
            </NavLink>
        </div>

    );
};

export {Movie};