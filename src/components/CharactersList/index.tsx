import { useEffect, MouseEvent, useState } from "react";
import { CharacterCard } from "../CharacterCard";

export const CharactesList = ({
    searchText = "",
    sortQuery = "",
    charactersList = [],
    selected = "",
    handleClick = () => {},
    // setSelected = () => {},
    getAllCharacters = () => {},
}: {
    searchText: string;
    sortQuery: string;
    charactersList: Array<any>;
    selected: string,
    handleClick: (e: MouseEvent, id: string, movies: Array<URL>) => void;
    // setSelected: (value: string) => void;
    getAllCharacters: () => void;
}) => {
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
        const filtered = charactersList.filter((item) => {
            if (searchText === "") {
                return item;
            }

            return item.name.toLowerCase().includes(searchText);
        });

        return sortQuery ? getSortedList(filtered) : filtered;
    };

    const filteredList = getFilteredList();

    useEffect(() => {
        getAllCharacters();
    }, []);

    return (
        <ul>
            {filteredList.map((character) => (
                <CharacterCard
                    selected={selected}
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
