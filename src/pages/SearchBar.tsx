import React, { useState, ChangeEvent } from 'react';

interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [query, setQuery] = useState<string>('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setQuery(value);
    };

    const handleSearch = () => {
        onSearch(query);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search"
                value={query}
                onChange={handleChange}
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export {SearchBar};