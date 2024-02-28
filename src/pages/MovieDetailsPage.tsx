import {FC, useEffect, useState} from "react";

import {MovieDetails} from "../components/MoviesContainer";
import {useParams} from "react-router-dom";
import {movieDetailsService} from "../services";
import {IMovieDetails} from "../interfaces";



const MovieDetailsPage: FC = () => {
    const [movieDetails, setMovieDetails] = useState<IMovieDetails>(null)
    const {id} = useParams()

    useEffect(() => {

            movieDetailsService.getById(+id).then(({data})=> setMovieDetails(data))

    }, [id]);
    return (
        <div>
            {movieDetails && <MovieDetails movieDetails={movieDetails}/>}
        </div>
    );
};

export {MovieDetailsPage};