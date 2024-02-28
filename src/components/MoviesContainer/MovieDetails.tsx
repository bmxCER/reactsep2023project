import React, {FC} from "react";
import {IMovieDetails} from "../../interfaces";



interface IProps{
    movieDetails: IMovieDetails
}

const MovieDetails: FC<IProps> = ({movieDetails}) => {
    const {id, genres_ids, overview, title, vote_average, poster_path} = movieDetails
    const poster = `https://image.tmdb.org/t/p/w500${poster_path}`

    return (
        <div>
            <div>id: {id}</div>
            <img src={`${poster}`} alt={`${title}`}/>
            <div>title: {title}</div>
            <div>genres: {genres_ids}</div>
            <div>overview: {overview}</div>
            <div>vote_average: {vote_average}</div>

        </div>
    );
};

export {MovieDetails};