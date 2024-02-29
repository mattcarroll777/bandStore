import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex justify-center item-center h-screen">
      <Image
        src="/BandBackground.webp"
        alt="vercel.svg"
        width={1440}
        height={844}
      />
    </div>
  );
}
