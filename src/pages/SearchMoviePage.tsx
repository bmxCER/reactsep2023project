import {SearchMovie} from "../components";
import {useLoaderData, useParams} from "react-router-dom";

const SearchMoviePage = () => {
    const searchMovie = useLoaderData()
    console.log(searchMovie);
    const {query} = useParams()
    return (
        <div>
            <SearchMovie searchMovie={query} />
        </div>
    );
};

export {SearchMoviePage};