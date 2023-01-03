import { useEffect, MouseEvent } from "react";
import { CharacterCard } from "../CharacterCard";
import { Character } from "../../types/interfaces";
import { getFilteredList } from "../../utils";

export const CharactesList = ({
    searchText = "",
    sortQuery = "",
    charactersList = [],
    selected = "",
    handleClick = () => {},
    getAllCharacters = () => {},
}: {
    searchText: string;
    sortQuery: string;
    charactersList: Array<Character>;
    selected: string;
    handleClick: (e: MouseEvent, id: string, movies: Array<URL>) => void;
    getAllCharacters: () => void;
}) => {
    const filteredList = getFilteredList(charactersList, sortQuery, searchText);

    useEffect(() => {
        getAllCharacters();
    }, [getAllCharacters]);

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
