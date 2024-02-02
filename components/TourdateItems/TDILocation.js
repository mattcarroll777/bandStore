export default function TDILocation({ venue, city, state, country }) {
  return (
    <div>
      <div>{venue}</div>
      <div className="flex items-center justify-between">
        <div>{city}</div>
        <div>{state}</div>
        <div>{country}</div>
      </div>
    </div>
  );
}
