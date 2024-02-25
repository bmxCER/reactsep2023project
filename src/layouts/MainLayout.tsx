import {Outlet, useLocation} from "react-router-dom";

import {Header} from "../pages";
import { SearchBar } from "../pages";

const MainLayout = () => {

    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};