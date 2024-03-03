import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import Badge from "@mui/material/Badge";
import { FormControlLabel, Switch } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { Context } from "../../hoc/ContextProvider";
import { genresService } from "../../services";
import { IGenre } from "../../interfaces/genresInterface";
import css from './Header.module.css';

const Header = () => {
    const [query, setQuery] = useState<string>('');
    const [genres, setGenres] = useState<IGenre[]>([]);
    const { setGenresWith, darkTheme, setDarkTheme } = useContext(Context);
    const navigate = useNavigate();

    const handleGenreClick = (genreId: string) => {
        setGenresWith(genreId);
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setQuery(value);
    };

    const { handleSubmit, reset } = useForm();
    const [name, setName] = useState<string>('')

    const search: SubmitHandler<any> = () => {
        navigate(`/search/keyword?query=${query}`);
        setName(query);
        reset();
    };

    useEffect(() => {
        genresService.getAll(genres).then(({ data }) => setGenres(data.genres));
    }, [genres]);

    const handleThemeChange = () => {
        setDarkTheme(!darkTheme);
    };

    return (
        <div>
            <div className={darkTheme ? `${css.HeaderCSS} ${css.darkTheme}` : css.HeaderCSS}>
                <NavLink to={'movies'}>Movies</NavLink>
                <div>
                    <form onSubmit={handleSubmit(search)}>
                        <input
                            type="text"
                            placeholder="Search"
                            value={query}
                            onChange={handleChange}
                            className={css.input}
                        />
                        <button type='submit' className={css.button}>Search</button>
                    </form>
                </div>
                <FormControlLabel
                    control={<Switch defaultChecked={darkTheme} onChange={handleThemeChange} color={"warning"} />}
                    label={'Theme'}
                    className={css.Switch}
                />
                <img
                    width="32"
                    height="32"
                    src="https://img.icons8.com/pastel-glyph/32/000000/user-male-circle.png"
                    alt="user-male-circle"
                    className={css.image}
                />
            </div>
            <div className={css.genresDiv}>
                {genres.map(genre => (
                    <NavLink key={genre.id} to={`genres/${genre.id}`} className={css.genres} onClick={() => handleGenreClick(genre.id)}>
                        <Badge badgeContent={5} style={{ color: darkTheme ? 'orange' : 'inherit' }}>{genre.name}</Badge>
                    </NavLink>
                ))}
                <hr style={{ backgroundColor: darkTheme ? 'white' : 'inherit' }}/>
            </div>
        </div>
    );
};

export { Header };
