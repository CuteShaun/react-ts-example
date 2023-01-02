export const MoviesList = ({ movieList = [] }: { movieList: Array<any> }) => {
    return (
        <ul>
            {movieList.map((movie) => (
                <li key={movie.release_date}>{`${movie.title} — ${movie.release_date}`}</li>
            ))}
        </ul>
    );
};
