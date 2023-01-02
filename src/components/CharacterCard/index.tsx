import { MouseEvent } from "react";
import "./CharacterCard.css";

export const CharacterCard = ({
    name = "",
    filmsNumber = 0,
    id = "",
    movies = [],
    handleClick = () => {},
}: {
    name: string,
    filmsNumber: number,
    id: string,
    movies: Array<URL>
    handleClick: (e: MouseEvent, id: string, movies: Array<URL>) => void
}) => {
    return (
        <li className="character-list__item" onClick={(e) => handleClick(e as MouseEvent, id, movies)}>
            <div className="card">{`${name} --- films ${filmsNumber}`}</div>
        </li>
    );
};
