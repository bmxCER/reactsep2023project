import {Movies} from "../components";


const MoviesPage = () => {
    return (
        <div>
            <Movies page={1} results={[]}/>
        </div>
    );
};

export {MoviesPage};