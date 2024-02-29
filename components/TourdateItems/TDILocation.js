export default function TDILocation({ venue, city, state, country }) {
  return (
    <div className="text-center p-4">
      <div className="text-lg font-bold">{venue}</div>
      <div className="text-sm font-semibold mt-2">
        {city}, {state && <span>{state}, </span>}
        {country}
      </div>
    </div>
  );
}
