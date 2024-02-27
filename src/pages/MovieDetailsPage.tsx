import {useEffect, useState} from "react";

import {MovieDetails} from "../components/MoviesContainer";
import {IMovieDetails} from "../interfaces";
import {useParams} from "react-router-dom";
import {movieDetailsService} from "../services";


const MovieDetailsPage = () => {
    const [movieDetails, setMovieDetails] = useState<IMovieDetails | null>(null)
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