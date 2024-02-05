import TourdateItem from './TourdateItem';

export default function TourdatesList({ tourdates }) {
  // Sort tourdates by date
  const sortedTourdates = tourdates.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center my-10">Tour Dates</h1>
      <div className="flex flex-col">
        {sortedTourdates.map((tourdate) => (
          <TourdateItem key={tourdate._id.toString()} tourdate={tourdate} />
        ))}
      </div>
    </div>
  );
}
