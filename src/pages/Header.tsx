import {NavLink} from "react-router-dom";
import {useState} from "react";
import {SearchBar} from "./SearchBar";

const Header = () => {
    const [searchBar, setSearchBar] = useState(false)

    const showSearchBar = () => {
        setSearchBar(prev => !prev)
    }

    const handleSearch = (query: string) => {
        console.log('Searching for:', query);

    }

    return (
        <div>
            <NavLink to={'movies'}>Movies</NavLink>
            <NavLink to={'genres'}>Genres</NavLink>
            <NavLink to={'search'} onClick={showSearchBar}>Search</NavLink>
            <button>Theme</button>

            {searchBar && <SearchBar onSearch={handleSearch}/>}

        </div>
    );
};

export {Header};