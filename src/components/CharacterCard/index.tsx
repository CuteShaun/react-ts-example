import "./CharacterCard.css";
import { MouseEvent } from "react";

export const CharacterCard = ({
    name = "",
    filmsNumber = 0,
    handleClick = () => {},
}: {
    name: string;
    filmsNumber: number;
    handleClick: (e: MouseEvent) => void;
}) => {
    return (
        <li className="character-list__item" onClick={(e) => handleClick(e as MouseEvent)}>
            <div
                className="card"
            >{`${name} --- films ${filmsNumber}`}</div>
        </li>
    );
};
