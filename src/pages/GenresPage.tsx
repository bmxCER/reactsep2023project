import {useLoaderData} from "react-router-dom";
import {Genres} from "../components";
import {IGenre} from "../interfaces/genresInterface";
import {FC} from "react";
import {IMovie} from "../interfaces";

const GenresPage: FC = () => {
    const {genres, movies} = useLoaderData() as {genres: IGenre[], movies: IMovie[]}
    console.log(genres);
    console.log(movies);
    return (
        <div>
            {genres.map(genre => (
                <Genres key={genre.id} genres={genre} movies={movies}/>
            ))}
        </div>
    );
};

export {GenresPage};