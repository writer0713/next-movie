import { API_URL } from '@/constants/api';
import Image from 'next/image';

async function fetchMovieDetails(id: string) {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/${id}`);
  const json = response.json();
  return json;
}

export default async function MovieDetailsComponent({ id }: { id: string }) {
  const movieDetails: MovieDetails = await fetchMovieDetails(id);

  return (
    <div className="flex flex-col items-center p-10 space-x-5 space-y-10 md:flex-row md:items-start">
      <Image
        src={movieDetails.poster_path}
        alt={movieDetails.title}
        width={200}
        height={200}
        className="duration-150 rounded-lg opacity-70 hover:opacity-100"
      />

      {/* 자세한 소개 */}
      <div className="flex flex-col space-y-4">
        <h1 className="text-xl">{movieDetails.title}</h1>
        <h3>⭐ {movieDetails.vote_average.toFixed(1)}</h3>
        <h3>{movieDetails.overview}</h3>
      </div>
    </div>
  );
}

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: any;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}
