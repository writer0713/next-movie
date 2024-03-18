import Link from 'next/link';
import Image from 'next/image';

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export default function MovieCardComponent({ movie }: { movie: IMovie }) {
  return (
    <Link href={`/movies/${movie.id}`}>
      <section className="flex flex-col items-center">
        <Image
          src={movie.poster_path}
          alt={movie.title}
          width={200}
          height={200}
          className="rounded-lg cursor-pointer opacity-70 hover:opacity-100 hover:duration-150"
        />
        <h1 className="my-5">{movie.title}</h1>
      </section>
    </Link>
  );
}
