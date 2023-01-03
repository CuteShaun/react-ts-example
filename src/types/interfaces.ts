export interface Character {
    birth_year: string;
    created: string;
    edited: string;
    eye_color: string;
    films: Array<URL>;
    gender: string;
    hair_color: string;
    height: string;
    homeworld: string;
    mass: string;
    name: string;
    skin_color: string;
    species: Array<string>;
    starships: Array<string>;
    url: string;
    vehicles: Array<string>;
}

export interface Movie {
    title: string;
    episode_id: number;
    opening_crawl: string;
    producer: string;
    release_date: string;
    characters: Array<string>;
    planets: Array<string>;
    starships: Array<string>;
    vehicles: Array<string>;
    species: Array<string>;
    created: string;
    edited: string;
    url: string;
}
