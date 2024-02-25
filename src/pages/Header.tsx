import {NavLink} from "react-router-dom";
import {useState} from "react";

import {SearchBar} from "./SearchBar";
import css from './Header.module.css'


const Header = () => {
    const [searchBar, setSearchBar] = useState(false)

    const showSearchBar = () => {
        setSearchBar(prev => !prev)
    }

    const handleSearch = (query: string) => {
        console.log('Searching for:', query);

    }

    return (
        <div className={css.HeaderCSS}>
            <NavLink to={'movies'}>Movies</NavLink>
            <NavLink to={'genres'}>Genres</NavLink>
            <NavLink to={'search'} onClick={showSearchBar}>Search</NavLink>
            <NavLink to={'theme'}>Theme</NavLink>

            {searchBar && <SearchBar onSearch={handleSearch}/>}

        </div>
    );
};

export {Header};