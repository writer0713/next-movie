import { API_URL } from '@/constants/api';

async function fetchMovieTrailers(id: string) {
  const response = await fetch(`${API_URL}/${id}/videos`);
  const json = response.json();
  return json;
}

export default async function MovieTrailersComponent({ id }: { id: string }) {
  const trailers: Trailer[] = await fetchMovieTrailers(id);

  return (
    <div className="grid gap-5 place-items-center md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 2xl:grid-cols-5">
      {trailers.map((trailer) => (
        <iframe
          key={trailer.id}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picutre-in-picture"
          allowFullScreen={true}
          src={`https://youtube.com/embed/${trailer.key}`}
          className=""
        />
      ))}
    </div>
  );
}

export interface Trailer {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}
