export default function TDIDate({ date, time, timezone }) {
  //Date formatter function
  function formatDate(dateString) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const dateObj = new Date(dateString);
    const month = months[dateObj.getMonth()];
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    const ordinal =
      day % 10 === 1 && day !== 11
        ? 'st'
        : day % 10 === 2 && day !== 12
        ? 'nd'
        : day % 10 === 3 && day !== 13
        ? 'rd'
        : 'th';
    return `${month} ${day}${ordinal}, ${year}`;
  }

  return (
    <div className="text-center sm:text-center p-4">
      <div className="text-lg font-semibold">{formatDate(date)}</div>
      <div className="text-sm text-gray-600 mt-2">
        {time} {timezone}
      </div>
    </div>
  );
}
