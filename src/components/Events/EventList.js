import EventItem from "./EventItem";

const EventList = ({ events }) => {
  const eventData = events.data;

  return (
    <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-3 lg:gap-4 items-stretch">
      {eventData.map((event) => (
        <EventItem key={event.id} {...event} />
      ))}
    </div>
  );
};

export default EventList;
