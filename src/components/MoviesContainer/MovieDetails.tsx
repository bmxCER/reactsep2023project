import React, {FC} from "react";
import {IMovieDetails} from "../../interfaces";



const MovieDetails: FC<IMovieDetails> = ({movieDetails}) => {
    const {id, genres, overview, title, vote_average, poster_path} = movieDetails
    return (
        <div>
            <div>id: {id}</div>
            <div>genres: {genres}</div>
            <div>overview: {overview}</div>
            <div>title: {title}</div>
            <div>vote_average: {vote_average}</div>
            <div>poster_path: {poster_path}</div>
        </div>
    );
};

export {MovieDetails};