import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-black text-white border-b-2 border-custom-sec">
      <div>
        <Image width={123} height={102} src="/BandLogo.webp" alt="/next.svg" />
      </div>
      <div>
        <Link className="mx-4 font-family-oswald" href={'/'}>
          Home
        </Link>
        <Link className="mx-4" href={'/tourdates'}>
          Tour
        </Link>
        <Link className="mx-4" href={'/shop'}>
          Shop
        </Link>
        <Link className="mx-4" href={'/about'}>
          About
        </Link>
      </div>
    </nav>
  );
}
