import { MouseEvent } from "react";
import "./CharacterCard.scss";

export const CharacterCard = ({
    name = "",
    filmsNumber = 0,
    id = "",
    movies = [],
    selected = "",
    handleClick = () => {},
}: {
    name: string;
    filmsNumber: number;
    id: string;
    movies: Array<URL>;
    selected: string;
    handleClick: (e: MouseEvent, id: string, movies: Array<URL>) => void;
}) => {
    return (
        <li
            className="character-list__item"
            onClick={(e) => handleClick(e as MouseEvent, id, movies)}
        >
            <div
                className={`card card${selected === id ? "--selected" : ""}`}
            >{`${name} --- films ${filmsNumber}`}</div>
        </li>
    );
};
