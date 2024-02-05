import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../service";
import type { Film } from "./../../type";

const FilmList: React.FC<{ filmUrls: string[] }> = ({ filmUrls }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["films", filmUrls],
    queryFn: () => Promise.all(filmUrls.map(fetchData<Film>)),
  });

  if (isLoading) return <div>Loading films...</div>;
  if (isError) return <div>Error fetching film data</div>;

  return (
    <div className="max-w-md bg-white shadow-md rounded-md overflow-hidden">
      <h3 className="bg-gray-200 text-gray-800 text-lg font-semibold px-4 py-2 border-b border-gray-300">
        Films:
      </h3>
      <ul>
        {data?.map((film: Film) => (
          <li
            key={film.url}
            className="px-4 py-2 border-b border-gray-300 last:border-b-0"
          >
            {film.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilmList;
