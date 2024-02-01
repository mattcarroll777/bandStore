import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-blue-500 text-white">
      <div>
        <Link href={'/'}>Home</Link>
      </div>
      <div>
        <Link className="mx-4" href={'/tourdates'}>
          Tour
        </Link>
        <Link className="mx-4" href={'/tourdates'}>
          Shop
        </Link>
        <Link className="mx-4" href={'/tourdates'}>
          About
        </Link>
      </div>
    </nav>
  );
}
