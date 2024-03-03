import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {GenresPage, MovieDetailsPage, MoviesPage} from "./pages";
import {genresService, movieDetailsService} from "./services";
import {IMovieDetails} from "./interfaces";
import {AxiosResponse} from "axios";
import {SearchMoviePage} from "./pages/SearchMoviePage";
import {searchService} from "./services/searchService";






const router= createBrowserRouter([
    {path: '', element:<MainLayout/>, children:[
            {
                index: true, element: <Navigate to={'movies'}/>
            },
            {
                path:'movies', element:<MoviesPage/>
            },
            {
                path: 'movie/:id', element:<MovieDetailsPage/>, loader: async ({params: {id} }) => {
                    const parseId = parseInt(id)
                    const response: AxiosResponse<IMovieDetails> = await movieDetailsService.getById(parseId);
                    return response.data;
                }
            },
            {
                path: 'search/keyword/:query',
                element: <SearchMoviePage />,
                loader: async ({ params: { query } }) => {
                    const search = await searchService.getAll(query);
                    return search.data;
                }
            },
            {
                path: 'genres/:genresId',
                element: <GenresPage />,
                loader: async ({ params: { genresId } }) => {
                    const parseGenreId = parseInt(genresId);
                    if (!isNaN(parseGenreId)) {
                        const genres = await genresService.getAll(parseGenreId);
                        return genres.data;
                    } else {
                        return null;
                    }
                }
            }
        ]}
])

export {router}