import { useState, useEffect, MouseEvent } from "react";
import { CharacterCard } from "../CharacterCard";
import { STRAPI_URL } from "../../constants";

export const CharactesList = ({
    searchText = "",
    sortQuery = "",
    handleClick = () => {},
}: {
    searchText: string;
    sortQuery: string;
    handleClick: (e: MouseEvent, id: string, movies: Array<URL>) => void;
}) => {
    const [list, setList] = useState([] as any[]);

    const getSortedList = (list = [] as any[]) => {
        if (sortQuery === "name") {
            return list.sort((a, b) => {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            });
        }

        if (sortQuery === "film") {
            return list.sort((a, b) => a.films.length - b.films.length);
        }

        return list;
    };

    const getFilteredList = () => {
        const filtered = list.filter((item) => {
            if (searchText === "") {
                return item;
            }

            return item.name.toLowerCase().includes(searchText);
        });

        return sortQuery ? getSortedList(filtered) : filtered;
    };

    const filteredList = getFilteredList();

    useEffect(() => {
        const getAllCharacters = async () => {
            const response = await fetch(STRAPI_URL);
            const data = await response.json();
            setList(data.results);
        };

        getAllCharacters();
    }, []);

    return (
        <ul>
            {filteredList.map((character) => (
                <CharacterCard
                    key={character.url}
                    id={character.url}
                    name={character.name}
                    filmsNumber={character.films.length}
                    movies={character.films}
                    handleClick={handleClick}
                />
            ))}
        </ul>
    );
};
