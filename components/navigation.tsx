'use client';

import Link from 'next/link';

export default function Navigation() {
  // const pathname = usePathname();
  return (
    <nav className="mt-10 mb-16">
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
