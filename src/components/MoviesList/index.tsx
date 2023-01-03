import { Movie } from "../../types/interfaces";

export const MoviesList = ({ movieList = [] }: { movieList: Array<Movie> }) => {
    return (
        <ul>
            {movieList.map((movie) => (
                <li key={movie.release_date}>{`${movie.title} — ${movie.release_date}`}</li>
            ))}
        </ul>
    );
};
