import {NavLink} from "react-router-dom";
import React, {ChangeEvent, useState} from "react";


import css from './Header.module.css'


const Header = () => {

    const [query, setQuery] = useState<string>('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setQuery(value);
    };

    const handleSearch = () => {
        console.log(query);
    };

    return (
        <div className={css.HeaderCSS}>
            <NavLink to={'movies'}>Movies</NavLink>
            <NavLink to={'genres'}>Genres</NavLink>
            <div>
                <input
                    type="text"
                    placeholder="Search"
                    value={query}
                    onChange={handleChange}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <NavLink to={'theme'}>Theme</NavLink>
        </div>
    );
};

export {Header};