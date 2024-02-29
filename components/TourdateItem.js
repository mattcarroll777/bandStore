import TDIDate from './TourdateItems/TDIDate';
import TDILocation from './TourdateItems/TDILocation';
import TDINote from './TourdateItems/TDINote';
import TDITickets from './TourdateItems/TDITickets';

export default function TourdateItem({ tourdate }) {
  return (
    <div className="flex flex-col md:flex-row items-center text-white justify-between w-full p-4 rounded-lg my-2 border-2 border-custom-sec">
      <div className="md:flex-1">
        <TDIDate
          date={tourdate.date}
          time={tourdate.time}
          timezone={tourdate.timezone}
        />
      </div>
      <div className="md:flex-2 text-center">
        <TDILocation
          venue={tourdate.venue}
          city={tourdate.city}
          state={tourdate.state}
          country={tourdate.country}
        />
      </div>
      <div className="md:flex-1 text-center md:text-left">
        {tourdate.notes && <TDINote note={tourdate.notes} />}
      </div>
      <div className="md:flex-1 text-right">
        <TDITickets />
      </div>
    </div>
  );
}
