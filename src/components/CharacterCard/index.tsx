export const CharacterCard = ({ name = '', filmsNuumber = 0 }) => {
    return (
        <li className="character-list__item">
            <div className="card">{`${name} --- films ${filmsNuumber}`}</div>
        </li>
    );
};
