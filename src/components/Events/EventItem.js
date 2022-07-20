import { Link } from "react-router-dom";
import {
  abbreviateNumber,
  INDONESIAN_SYMBOL,
} from "../../utils/abbreviateNumber";
import dateFormatted from "../../utils/dateFormatted";

const EventItem = ({
  id,
  title,
  eventImages,
  user_id,
  price,
  dateStart,
  dateEnd,
}) => {
  const eventImage =
    eventImages && eventImages.url !== ""
      ? eventImages.url
      : "https://via.placeholder.com/150";

  return (
    <Link
      to={`/events/${id}`}
      className="overflow-hidden shadow-lg rounded-lg h-full w-full cursor-pointer m-auto"
    >
      <div className="w-full block">
        <img
          alt={"Event"}
          src={eventImage}
          className="h-52 md:h-64 lg:h-40 w-full object-cover"
        />
      </div>
      <div className="p-4">
        <div className="w-full block h-full">
          {title.length > 24 ? (
            <>
              <p className="hidden md:block lg:hidden text-gray-800 dark:text-white text-xl h-14 font-black font-sans mb-1">
                {title.slice(0, 24)}
                {"..."}
              </p>
              <p className="block md:hidden lg:block text-gray-800 dark:text-white text-xl h-14 font-black font-sans mb-1">
                {title.slice(0, 30)}
                {"..."}
              </p>
            </>
          ) : (
            <p className="text-gray-800 dark:text-white text-xl h-14 font-black font-sans mb-1">
              {title}
            </p>
          )}
          <p className="text-md font-medium mb-2">
            {dateFormatted(dateStart) === dateFormatted(dateEnd)
              ? dateFormatted(dateStart)
              : `${dateFormatted(dateStart)} - ${dateFormatted(dateEnd)}`}
          </p>
          <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
            {abbreviateNumber(price, INDONESIAN_SYMBOL)} / Orang
          </span>
        </div>
      </div>
      <div className="p-4 pt-0">
        <div className="border-t-2 my-3"></div>
        <div className="flex items-center">
          <div className="block">
            <img
              alt={
                user_id.profileImg
                  ? user_id.profileImg.alternativeText
                  : "profile"
              }
              src={
                user_id.profileImg
                  ? user_id.profileImg.url
                  : "https://via.placeholder.com/150"
              }
              className="mx-auto object-cover rounded-full h-10 w-10 "
            />
          </div>
          <p className="text-gray-800 dark:text-white text-sm ml-4">
            {user_id.username}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default EventItem;
