import { MouseEvent, useState, useCallback } from "react";
import { CharactesList } from "./components/CharactersList";
import { MoviesList } from "./components/MoviesList";
import { Select } from "./components/UI/Select";
import { Input } from "./components/UI/Input";
import { Pagination } from "./components/Pagination";
import { STRAPI_URL, SORT_OPTIONS } from "./constants";
import { AtWalker } from "./components/AT-AT-Walker";

export const App = () => {
    const [charactersList, setCharactersList] = useState([] as any[]);
    const [totalCount, setTotalCount] = useState(0);
    const [movieList, setMovieList] = useState([] as any[]);
    const [searchText, setSearchText] = useState("");
    const [sortQuery, setSortQuery] = useState("");
    const [selected, setSelected] = useState("");

    const getAllCharacters = useCallback(async (url: string = STRAPI_URL) => {
        const response = await fetch(url);
        const data = await response.json();
        setTotalCount(data.count);
        setCharactersList(data.results);
    }, []);

    const getMovieList = (movieList: Array<URL> = []) => {
        Promise.all(
            movieList.map(async (movie) => {
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
        setSelected(id);
    };

    const handleSearch = (e: React.FormEvent<HTMLInputElement>): void => {
        const target = e.target as HTMLInputElement;
        setSearchText(target.value);
    };

    const handleSort = (e: React.FormEvent<HTMLSelectElement>): void => {
        const target = e.target as HTMLSelectElement;
        setSortQuery(target.value);
    };

    return (
        <>
            <div className="layout">
                <main className="main">
                    <section className="section characters-section">
                        <header className="characters-section__header">
                            <Input
                                type="text"
                                placeholder="Search your destiny"
                                value={searchText}
                                onChange={handleSearch}
                            />
                            <Select
                                placeholder="sort by"
                                options={SORT_OPTIONS}
                                onChange={handleSort}
                            />
                        </header>
                        <CharactesList
                            getAllCharacters={getAllCharacters}
                            charactersList={charactersList}
                            handleClick={handleClick}
                            searchText={searchText}
                            sortQuery={sortQuery}
                            selected={selected}
                        />
                        <Pagination totalCount={totalCount} getAllCharacters={getAllCharacters} />
                    </section>
                    <section className="section movies-section">
                        <MoviesList movieList={movieList} />
                    </section>
                </main>
            </div>
            <AtWalker />
        </>
    );
};
