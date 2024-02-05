
import { FC } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import FilmList from "../components/FilmList";
import HomePlanet from "../components/HomeWorld";

const fetchCharacterDetails = async (characterId: string) => {
  const response = await fetch(`https://swapi.dev/api/people/${characterId}/`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const CharacterDetails: FC = () => {
  const { characterId } = useParams<{ characterId: string }>();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["character", characterId],
    queryFn: () => fetchCharacterDetails(characterId ?? ""),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Character Details</h2>
      <div className="mb-4">
        <strong className="block mb-2">Name:</strong> {data.name}
      </div>
      <div className="mb-4">
        <strong className="block mb-2">Hair Color:</strong> {data.hair_color}
      </div>
      <div className="mb-4">
        <strong className="block mb-2">Eye Color:</strong> {data.eye_color}
      </div>
      <div className="mb-4">
        <strong className="block mb-2">Gender:</strong> {data.gender}
      </div>
      <div className="mb-4">
        <HomePlanet url={data.homeworld} />
      </div>
      <div>
        <strong className="block mb-2">Films:</strong>
        <ul>
          <FilmList filmUrls={data.films} />
        </ul>
      </div>
    </div>
  );
};

export default CharacterDetails;
