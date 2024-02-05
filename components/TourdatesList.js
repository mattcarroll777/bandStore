import TourdateItem from './TourdateItem';

export default function TourdatesList({ tourdates }) {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center my-10">Tour Dates </h1>
      <div className="flex flex-col">
        {tourdates.map((tourdate) => (
          <TourdateItem key={tourdate._id.toString()} tourdate={tourdate} />
        ))}
      </div>
    </div>
  );
}
