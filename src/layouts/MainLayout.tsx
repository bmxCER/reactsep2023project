import React, { useContext } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../pages";
import css from "./MainLayout.module.css";
import {Context} from "../hoc/ContextProvider";

const MainLayout = () => {
    const { darkTheme } = useContext(Context);

    return (
        <div className={darkTheme ? css.darkTheme : css.lightTheme}>
            <Header />
            <Outlet />
        </div>
    );
};

export { MainLayout };