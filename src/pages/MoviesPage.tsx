
import {Movies} from "../components/MoviesContainer";


const MoviesPage = () => {
    return (
        <div>
            <Movies page={1} results={[]}/>
        </div>
    );
};

export {MoviesPage};