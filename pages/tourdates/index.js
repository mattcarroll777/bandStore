// pages/tourdates.js

import React from 'react';

export default function TourDates({ tourdates }) {
  return (
    <div>
      <h1>Tour Dates</h1>
      <ul>
        {tourdates.map((tourdate, index) => (
          <li key={index}>
            {tourdate.date} - {tourdate.venue}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${process.env.Base_URL}/api/tourdates`);
  const tourdates = await res.json();

  return {
    props: {
      tourdates,
    },
  };
}
