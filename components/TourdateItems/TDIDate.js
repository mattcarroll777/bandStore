export default function TDIDate({ date, time, timezone }) {
  return (
    <div className="text-center sm:text-center p-4">
      <div className="text-lg font-semibold">{date}</div>
      <div className="text-sm text-gray-600 mt-2">
        {time} {timezone}
      </div>
    </div>
  );
}
