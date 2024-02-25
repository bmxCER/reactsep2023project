import {FC} from "react";

import {IMovieProps} from "../../interfaces";

const Movie: FC<IMovieProps> = ({movie}) => {
    const {id, title, poster_path} = movie

    const poster = `https://image.tmdb.org/t/p/w500${poster_path}`
    return (
        <div>
            <img src={`${poster}`} alt={`${title}`}/>
            <div>id: {id}</div>
            <div>title: {title}</div>
        </div>
    );
};

export {Movie};