import { createContext, FC, PropsWithChildren, SetStateAction, Dispatch, useState } from "react";
import { IGenre } from "../interfaces/genresInterface";

interface IContextProps {
    setAllGenres: Dispatch<SetStateAction<IGenre[]>>;
    allGenres: IGenre[];
    genresWith: string[];
    genresWithout: string[];
    setGenresWith: Dispatch<SetStateAction<string[]>>;
    setGenresWithout: Dispatch<SetStateAction<string[]>>;
    setDarkTheme: Dispatch<SetStateAction<boolean>>;
    darkTheme: boolean;
}

const Context = createContext<IContextProps>({
    setAllGenres: () => {},
    allGenres: [],
    genresWith: [],
    genresWithout: [],
    setGenresWith: () => {},
    setGenresWithout: () => {},
    setDarkTheme: () => {},
    darkTheme: false
});

const ContextProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
    const [allGenres, setAllGenres] = useState<IGenre[]>([]);
    const [darkTheme, setDarkTheme] = useState<boolean>(false);
    const [genresWith, setGenresWith] = useState<string[]>([]);
    const [genresWithout, setGenresWithout] = useState<string[]>([]);

    return (
        <Context.Provider
            value={{
                setAllGenres,
                allGenres,
                genresWith,
                genresWithout,
                setGenresWith,
                setGenresWithout,
                setDarkTheme,
                darkTheme
            }}
        >
            {children}
        </Context.Provider>
    );
};

export { Context, ContextProvider };
