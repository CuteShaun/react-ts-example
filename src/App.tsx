import { MouseEvent, useState } from "react";
import { CharactesList } from "./components/CharactersList";
import { MoviesList } from "./components/MoviesList";
import { Select } from "./components/UI/Select";
import { Input } from "./components/UI/Input";

const sortOptions = ["name", "film"];

export const App = () => {
    const [movieList, setMovieList] = useState([] as any[]);
    const [searchText, setSearchText] = useState("");
    const [sortQuery, setSortQuery] = useState("");

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

    const handleClick = (e: MouseEvent, id: string, movies: Array<URL>): void => {
        getMovieList(movies);
    };

    const handleSearch = (e: React.FormEvent<HTMLInputElement>): void => {
        const target = e.target as HTMLInputElement;
        setSearchText(target.value);
    };

    const handleSort = (e: React.FormEvent<HTMLSelectElement>): void => {
        const target = e.target as HTMLSelectElement;
        setSortQuery(target.value);
    }

    return (
        <div className="layout">
            <main className="main">
                <section className="characters-section">
                    <header className="characters-section__header">
                        <Input
                            type="text"
                            placeholder="Search your destiny"
                            value={searchText}
                            onChange={handleSearch}
                        />
                        <Select options={sortOptions} onChange={handleSort} />
                    </header>
                    <CharactesList handleClick={handleClick} searchText={searchText} sortQuery={sortQuery} />
                </section>
                <section className="movies-section">
                    <MoviesList movieList={movieList} />
                </section>
            </main>
        </div>
    );
};
