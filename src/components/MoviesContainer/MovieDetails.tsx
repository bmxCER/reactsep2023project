import React, {FC, useContext} from "react";

import {IMovieDetails} from "../../interfaces";
import css from './MovieDetails.module.css'
import StarRatings from 'react-star-ratings';
import {NavLink, useNavigate} from "react-router-dom";
import Badge from "@mui/material/Badge";
import {Context} from "../../hoc/ContextProvider";


interface IProps{
    movieDetails: IMovieDetails
}

const MovieDetails: FC<IProps> = ({movieDetails}) => {
    const {id, genres, overview, title, vote_average, poster_path} = movieDetails
    const poster = `https://image.tmdb.org/t/p/w500${poster_path}`
    const {darkTheme} = useContext(Context)

    const navigate = useNavigate()
    const handleBack = () => {
        navigate(`/movies`)
    }

    return (
        <div>
            <button onClick={handleBack} className={css.backButton}>Back</button>
            <div className={css.title}>{title}</div>
            <div className={css.main}>
                <img src={`${poster}`} alt={`${title}`}/>
                <div>
                    <h3>Genres</h3>
                    <div>{movieDetails.genres.map(genre => (
                        <NavLink key={genre.id} to={`/genres/${genre.id}`} className={css.genres}>
                            <Badge badgeContent={5} style={{ color: darkTheme ? 'orange' : 'inherit' }}>{genre.name}</Badge>
                        </NavLink>
                    ))}</div>
                    <h3>Overview</h3>
                    <div>{overview}</div>
                    <h3>Vote</h3>
                    <StarRatings
                        rating={vote_average}
                        starRatedColor="orange"
                        numberOfStars={8}
                        starEmptyColor='gray'
                        starDimension='20px'
                        starSpacing='5px'
                    />
                </div>

            </div>


        </div>
    );
};

export {MovieDetails};