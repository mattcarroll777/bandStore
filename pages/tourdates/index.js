import TourdatesList from '@/components/TourdatesList';
import React from 'react';

export default function TourDates({ tourdates }) {
  return (
    <div>
      <h1 className="p-10 text-white text-center text-xl">Tour Dates</h1>
      <TourdatesList tourdates={tourdates} />
    </div>
  );
}

export async function getServerSideProps() {
  const baseUrl =
    // 'http://localhost:3000/' ||
    'https://band-store-next-git-main-mattcarroll777.vercel.app/';
  const res = await fetch(`${baseUrl}/api/tourdates`);
  const tourdates = await res.json();

  return {
    props: {
      tourdates,
    },
  };
}
