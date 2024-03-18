import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 py-5 opacity-90 bg-slate-900">
      <ul className="flex justify-start mx-10">
        <li className="mr-6">
          <Link
            href="/"
            className="text-xl font-extrabold text-white hover:text-pink-400"
          >
            Home
          </Link>
        </li>
      </ul>
    </nav>
  );
}
