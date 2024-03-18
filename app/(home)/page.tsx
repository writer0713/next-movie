import { Metadata } from 'next';
import MovieCardComponent, { IMovie } from './components/movieCard';
import { API_URL } from '@/constants/api';

export const metadata: Metadata = {
  title: 'HOME',
};

async function fetchMovies() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies: [IMovie] = await fetchMovies();
  return (
    <section className="grid gap-5 place-items-center md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 2xl:grid-cols-5">
      {movies.map((movie) => (
        <MovieCardComponent movie={movie} key={movie.id} />
      ))}
    </section>
  );
}
