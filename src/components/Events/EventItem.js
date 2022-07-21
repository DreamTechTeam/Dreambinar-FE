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
  priceType,
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
          className="md:h-64 lg:h-40 w-full object-cover"
        />
      </div>
      <div className={`p-4 ${title.length > 24 ? "mb-0" : "mb-[2.563rem]"}`}>
        <div className="w-full block h-full">
          {title.length > 40 ? (
            <>
              <p className="hidden md:block lg:hidden text-gray-800 dark:text-white text-xl h-14 font-black font-sans mb-1">
                {title.slice(0, 40)}
                {"..."}
              </p>
              <p className="block md:hidden lg:block text-gray-800 dark:text-white text-xl h-14 font-black font-sans mb-1">
                {title.slice(0, 35)}
                {"..."}
              </p>
            </>
          ) : (
            <p className="text-gray-800 dark:text-white text-xl font-black font-sans mb-1">
              {title}
            </p>
          )}
          <p className="text-md font-medium mb-2">
            {dateFormatted(dateStart) === dateFormatted(dateEnd)
              ? dateFormatted(dateStart)
              : `${dateFormatted(dateStart)} - ${dateFormatted(dateEnd)}`}
          </p>
          <div
            className={`bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900 w-fit`}
          >
            {price ? abbreviateNumber(price, INDONESIAN_SYMBOL) : "Free"}
            {price ? ` / ${priceType ? priceType : ""}` : ""}
          </div>
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
            {user_id.fullName.length > 24
              ? user_id.fullName.slice(0, 24) + "..."
              : user_id.fullName}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default EventItem;
