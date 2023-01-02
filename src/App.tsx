import { MouseEvent, useState } from "react";
import { CharactesList } from "./components/CharactersList";
import { MoviesList } from "./components/MoviesList";
import { Select } from "./components/UI/Select";
import { Input } from "./components/UI/Input";

const sortOptions = ["name", "film"];

export const App = () => {
    const [movieList, setMovieList] = useState([] as any[]);

    const getMovieList = (movieList: Array<URL> = []) => {
        Promise.all(
            movieList.map((movie) => {
                return fetch(movie)
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        return data;
                    });
            })
        )
            .then((values) => {
                setMovieList(values);
            })
            .catch(console.error.bind(console));
    };

    const handleClick = (e: MouseEvent, id: string, movies: Array<URL>) => {
        getMovieList(movies);
    };

    return (
        <div className="layout">
            <main className="main">
                <section className="characters-section">
                    <header className="characters-section__header">
                        <Input type="text" placeholder="Search your destiny" />
                        <Select options={sortOptions} />
                    </header>
                    <CharactesList handleClick={handleClick} />
                </section>
                <section className="movies-section">
                    <MoviesList movieList={movieList} />
                </section>
            </main>
        </div>
    );
};
