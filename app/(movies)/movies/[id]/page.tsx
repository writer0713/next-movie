import { Suspense } from 'react';
import MovieDetailsComponent from '../../components/movieDetails';
import MovieTrailersComponent from '../../components/movieTrailers';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Movie',
};

export default async function MovieDetailPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <section>
      <Suspense>
        <MovieDetailsComponent id={id} />
      </Suspense>
      <Suspense>
        <MovieTrailersComponent id={id} />
      </Suspense>
    </section>
  );
}
