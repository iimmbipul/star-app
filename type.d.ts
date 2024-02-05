export type Film  = {
    title: string;
    characters: string[];
    planets: string[];
    url: string;
}

export type Planet = {
    name: string;
    population: string;
    url: string;
}

export type PeopleResponse =  {
    count: number;
    next: string | null;
    previous: string | null;
    results: Person[];
}

export type Person =  {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    url: string;
}