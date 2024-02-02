import TourdateItem from './TourdateItem';

export default function TourdatesList({ tourdates }) {
  return (
    <>
      <h1>Tour Dates </h1>
      {tourdates.map((tourdate) => (
        <TourdateItem key={tourdate._id.toString()} tourdate={tourdate} />
      ))}
    </>
  );
}
