import TDIDate from './TourdateItems/TDIDate';
import TDILocation from './TourdateItems/TDILocation';
import TDINote from './TourdateItems/TDINote';
import TDITickets from './TourdateItems/TDITickets';

export default function TourdateItem({ tourdate }) {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex-1">
        <TDIDate
          date={tourdate.date}
          time={tourdate.time}
          timezone={tourdate.timezone}
        />
      </div>
      <div className="flex-1 text-center">
        <TDILocation
          venue={tourdate.venue}
          city={tourdate.city}
          state={tourdate.state}
          country={tourdate.country}
        />
      </div>
      <div className="flex-1 text-center">
        {tourdate.notes && <TDINote note={tourdate.notes} />}
      </div>
      <div className="flex-1 text-right">
        <TDITickets />
      </div>
    </div>
  );
}
