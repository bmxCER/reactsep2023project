import {Outlet} from "react-router-dom";

import {Header} from "../pages";

const MainLayout = () => {

    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};