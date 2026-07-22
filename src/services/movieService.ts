import axios from "axios";
import type { Movie } from "../types/movie";

interface MoviesHttpResponse {
  results: Movie[];
  total_page: number;
}

const API_KEY = import.meta.env.VITE_TMDB_TOKEN;

export const fetchMovies = async (
  movie: string,
  page: number,
): Promise<Movie[]> => {
  const { data } = await axios.get<MoviesHttpResponse>(
    `https://api.themoviedb.org/3/search/movie`,
    {
      params: {
        query: movie,
        page,
      },
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
    },
  );
  console.log(data.results);
  console.log(data);
  return data.results;
};
