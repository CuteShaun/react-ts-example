import { useState, useEffect, MouseEvent } from "react";
import { CharacterCard } from "../CharacterCard";
import { STRAPI_URL } from "../../constants";

export const CharactesList = ({
    handleClick = () => {}
}: {
    handleClick: (e: MouseEvent, id: string, movies: Array<URL>) => void
}) => {
    const [list, setList] = useState([] as any[]);
    const [movieMap, setMovieMap] = useState([]);

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
            {list.map((character) => (
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
