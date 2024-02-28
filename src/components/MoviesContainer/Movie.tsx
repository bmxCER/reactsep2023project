import {FC, PropsWithChildren} from "react";

import {NavLink} from "react-router-dom";
import {IMovie} from "../../interfaces";

interface IMovieProps extends PropsWithChildren {
    movie: IMovie
}

const Movie: FC<IMovieProps> = ({movie}) => {
    const {id, title, poster_path} = movie
    const poster = `https://image.tmdb.org/t/p/w500${poster_path}`


    return (
        <NavLink to={`/movie/${id}`}>
            <img src={`${poster}`} alt={`${title}`}/>
            <div>id: {id}</div>
            <div>title: {title}</div>
        </NavLink>
    );
};

export {Movie};