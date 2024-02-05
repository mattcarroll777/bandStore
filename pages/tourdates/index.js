import TourdatesList from '@/components/TourdatesList';
import React from 'react';

export default function TourDates({ tourdates }) {
  return (
    <div>
      <TourdatesList tourdates={tourdates} />
    </div>
  );
}

export async function getServerSideProps() {
  const baseUrl =
    'http://localhost:3000/' ||
    'https://band-store-next-git-main-mattcarroll777.vercel.app/';
  const res = await fetch(`${baseUrl}/api/tourdates`);
  const tourdates = await res.json();

  return {
    props: {
      tourdates,
    },
  };
}
