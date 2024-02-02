export default function TDIDate({ date, time, timezone }) {
  return (
    <div>
      <div>{date}</div>
      <div className="flex">
        <div>{time}</div>
        <div>{timezone}</div>
      </div>
    </div>
  );
}
