import {useLoaderData} from "react-router-dom";
import {FC} from "react";

import {MovieDetails} from "../components/MoviesContainer";
import {IMovieDetails} from "../interfaces";


const MovieDetailsPage: FC = () => {
    const movieDetails = useLoaderData() as IMovieDetails
    console.log(movieDetails);


    return (
        <div>
            {<MovieDetails movieDetails={movieDetails}/>}
        </div>
    );
};

export {MovieDetailsPage};