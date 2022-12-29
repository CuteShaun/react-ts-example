import { useState, useEffect } from "react";
import { STRAPI_URL } from "../../constants";
import { CharacterCard } from "../CharacterCard";

export const CharactesList = () => {
    const [list, setList] = useState([] as any[])

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
                <CharacterCard key={character.url} name={character.name} filmsNuumber={character.films.length}/>
            ))}
        </ul>
    );
};
