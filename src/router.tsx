import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {MovieDetailsPage, MoviesPage} from "./pages";
import {movieDetailsService} from "./services";
import {IMovieDetails} from "./interfaces";
import {AxiosResponse} from "axios";




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
            }
        ]}
])

export {router}