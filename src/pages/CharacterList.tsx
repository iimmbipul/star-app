import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import HomePlanet from "../components/HomeWorld";
import { fetchData } from "../service";
import type { PeopleResponse, Person } from "../../type";

const url = "https://swapi.dev/api/people/";

const CharacterList: React.FC = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["characters"],
    queryFn: () => fetchData<PeopleResponse>(url),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Star Wars Characters</h2>
      <div className="flex flex-wrap mx-4">
        {data?.results?.map((character: Person) => (
          <div
            key={character.url}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
          >
            <Link
              to={`/characters/${character.url.split("/").reverse()[1]}`}
              className="block p-4 bg-white border-2 hover:bg-gray-300 rounded-md transition-colors"
            >
              <div>
                <strong>Name:</strong>
                {character.name}
              </div>
              <div>
                <strong>Gender:</strong>
                {character.gender}
              </div>

              <HomePlanet url={character.homeworld} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacterList;
