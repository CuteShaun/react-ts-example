import { Character } from "../types/interfaces";

export const getSortedList = (list = [] as Character[], sortQuery = "") => {
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

export const getFilteredList = (
    charactersList = [] as Character[],
    sortQuery = "",
    searchText = "",
) => {
    const filtered = charactersList.filter((item) => {
        if (searchText === "") {
            return item;
        }

        return item.name.toLowerCase().includes(searchText);
    });

    return sortQuery ? getSortedList(filtered, sortQuery) : filtered;
};
