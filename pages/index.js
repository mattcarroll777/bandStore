import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative w-full h-64">
      <Image
        src="/BandBackground.webp"
        alt="vercel.svg"
        className="absolute inset-0 w-full h-844 object-cover"
        width={1440}
        height={844}
      />
      <Image
        src="/BandLogoInv.png"
        alt="vercel.svg"
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-466 h-195"
        width={466}
        height={195}
      />
    </div>
  );
}
