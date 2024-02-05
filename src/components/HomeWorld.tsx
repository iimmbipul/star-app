import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../service";
import type { Planet } from "../../type";

const HomePlanet: React.FC<{ url: string }> = ({ url }) => {
  const planetId = url.split("/").reverse()[1];

  const { data, isLoading, isError } = useQuery({
    queryKey: ["planet", planetId],
    queryFn: () => fetchData<Planet>(url),
  });

  if (isLoading) return <div>Loading planet...</div>;
  if (isError) return <div>Error fetching planet data</div>;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="px-3 py-4">
        <div className="font-bold text-xs mb-2">Home Planet Details</div>
        <div className="mb-2">
          <strong>Name:</strong> {data?.name}
        </div>
        <div>
          <strong>Population:</strong> {data?.population}
        </div>
      </div>
    </div>
  );
};

export default HomePlanet;
