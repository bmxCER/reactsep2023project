import {useLoaderData} from "react-router-dom";
import {FC} from "react";


import {IMovieDetails} from "../interfaces";
import {MovieDetails} from "../components";


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