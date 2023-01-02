export const MoviesList = ({ movieList = [] }: { movieList: Array<any> }) => {
    return (
        <ul>
            {movieList.map((movie) => (
                <li>{`${movie.title} — ${movie.release_date}`}</li>
            ))}
        </ul>
    );
};
