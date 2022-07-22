import React from "react";
import Head from "../components/Head";
import NavBar from "../components/NavBar";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaMoneyBillWave,
} from "react-icons/fa";
import { IoShareSocialSharp } from "react-icons/io5";
import FooTer from "../components/FooTer";
import strapi from "../api/strapi";
import { useQuery } from "@tanstack/react-query";
import dateFormatted from "../utils/dateFormatted";
import timeToWIB from "../utils/timeToWIB";
import moneyFormat from "../utils/moneyFormat";
import parse from "html-react-parser";
import "./EventsDetail.css";
import EventItem from "../components/Events/EventItem";
import { Spinner, Tooltip } from "flowbite-react";
import { RWebShare } from "react-web-share";
import isExpired from "../utils/isExpired";

const EventsDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchEvent = async (id) => {
    try {
      const response = await strapi.get(
        `/events/${id}?populate[0]=category&populate[1]=user_id.profileImg&populate[2]=eventImages`,
        {
          headers: {
            Authorization:
              "Bearer 2705bddd81d2b0875e6d5fed27debd33c59b4909b934ab3b5dae1ac35f4c45e30b4d0ccff1241b465d391fbd9052ca8b6f9830ce518d259035294e5e9307efe3b407618300309ea59a0783b887189fffd7c95a4a0c4ccd83ac8ccd63b73413c4643dd9078fb607248a8671455f188e7667a5c6046caa98f61b0959b31b6e8f64",
          },
        }
      );

      return response.data;
    } catch (error) {
      console.clear();
      navigate("/404");
    }
  };

  const fetchEventsRandom = async (id) => {
    try {
      const response = await strapi.get(
        `/events?populate[0]=category&populate[1]=user_id.profileImg&populate[2]=eventImages&filters[id][$ne]=${id}`,
        {
          headers: {
            Authorization:
              "Bearer 2705bddd81d2b0875e6d5fed27debd33c59b4909b934ab3b5dae1ac35f4c45e30b4d0ccff1241b465d391fbd9052ca8b6f9830ce518d259035294e5e9307efe3b407618300309ea59a0783b887189fffd7c95a4a0c4ccd83ac8ccd63b73413c4643dd9078fb607248a8671455f188e7667a5c6046caa98f61b0959b31b6e8f64",
          },
        }
      );

      return response.data;
    } catch (error) {
      console.clear();
      navigate("/404");
    }
  };

  let location = useLocation();
  let currentUrl = `https://dreambinar.vercel.app${location.pathname}`;

  const { data, isLoading, error } = useQuery(["event", id], () =>
    fetchEvent(id)
  );
  const eventsRandom = useQuery(["eventsRandom", id], () =>
    fetchEventsRandom(id)
  );

  if (isLoading || eventsRandom.isLoading)
    return (
      <div className="flex justify-center items-center w-screen h-screen">
        <Spinner aria-label="Center-aligned spinner example" size="xl" />
      </div>
    );

  if (error) return "An error has occurred: " + error.message;
  if (eventsRandom.error)
    return "An error has occurred: " + eventsRandom.error.message;

  const eventImage =
    data.data.eventImages && data.data.eventImages !== ""
      ? data.data.eventImages.url
      : "https://via.placeholder.com/150";

  const profileImage =
    data.data.user_id.profileImg && data.data.user_id.profileImg.url !== ""
      ? data.data.user_id.profileImg.url
      : "https://via.placeholder.com/150";

  return (
    <>
      <Head title={data.data.title} />

      <header>
        <NavBar />
      </header>

      <article>
        <div className="container mx-auto px-4 mt-8 md:px-8 lg:px-12 xl:mt-12 xl:px-16">
          {/* Section Breadcrumbs Start */}
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  to="/"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <Link
                    to="/events"
                    className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    Events
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="ml-1 text-sm font-medium md:ml-2">
                    {data.data.title}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          {/* Section Breadcrumbs End */}

          {/* Section Event Image and Organizer Start */}
          <div className="grid overflow-hidden grid-cols-1 grid-rows-1 lg:gap-9 lg:grid-cols-3 mt-4 lg:h-full">
            <div
              style={{
                backgroundImage: `url(${eventImage})`,
              }}
              className="box lg:col-span-2 rounded-lg bg-center bg-cover h-72 lg:h-full lg:items-stretch"
            ></div>
            <div className="box lg:col-start-3 rounded-lg lg:border-2 lg:border-gray-100">
              <div className="w-full block mt-4 lg:mt-0 lg:p-4">
                <div className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 rounded-lg dark:bg-yellow-200 dark:text-yellow-900 mb-2 max-w-fit">
                  <p className="py-2 px-4">{data.data.category.name}</p>
                </div>
                <p className="text-gray-800 dark:text-white text-xl font-black font-sans mb-5">
                  {data.data.title}
                </p>

                <div className="flex flex-col gap-2 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-700 rounded h-6 w-6 flex justify-center items-center">
                      <p className="text-white">
                        <FaCalendarAlt />
                      </p>
                    </div>
                    {isExpired(data.data.dateEnd) ? (
                      <p className="text-md font-medium items-stretch flex justify-center">
                        Event Expired
                      </p>
                    ) : (
                      <p className="text-md font-medium items-stretch flex justify-center">
                        {dateFormatted(data.data.dateStart) ===
                        dateFormatted(data.data.dateEnd)
                          ? dateFormatted(data.data.dateStart)
                          : `${dateFormatted(
                              data.data.dateStart
                            )} - ${dateFormatted(data.data.dateEnd)}`}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-green-700 rounded h-6 w-6 flex justify-center items-center">
                      <p className="text-white">
                        <FaClock />
                      </p>
                    </div>
                    <p className="text-md font-medium items-stretch flex justify-center">
                      {timeToWIB(data.data.timeStart)} -{" "}
                      {timeToWIB(data.data.timeEnd)}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-green-700 rounded h-6 w-6 flex justify-center items-center">
                      <p className="text-white">
                        <FaMapMarkerAlt />
                      </p>
                    </div>
                    <Tooltip
                      content={data.data.location}
                      placement="bottom"
                      trigger={
                        data.data.location.length > 36 ? "hover" : "none"
                      }
                    >
                      <p className="text-md font-medium items-stretch flex justify-center capitalize">
                        {data.data.location.length > 36
                          ? data.data.location.substring(0, 36) + "..."
                          : data.data.location}
                      </p>
                    </Tooltip>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-green-700 rounded h-6 w-6 flex justify-center items-center">
                      <p className="text-white">
                        <FaMoneyBillWave />
                      </p>
                    </div>
                    <p className="text-md font-medium items-stretch flex justify-center">
                      {data.data.price !== "0"
                        ? `${moneyFormat(data.data.price)}`
                        : "Free"}
                      {data.data.priceType ? ` / ${data.data.priceType}` : ""}
                    </p>
                  </div>
                </div>

                <div>
                  <Link to={`/user/${data.data.user_id.id}`}>
                    <div className="border-t-2 border-dotted my-3"></div>
                    <div className="flex items-center">
                      <div className="block">
                        <img
                          alt={
                            data.data.user_id.profileImg
                              ? data.data.user_id.profileImg.alternativeText
                              : data.data.user_id.username + " profile"
                          }
                          src={profileImage}
                          className="mx-auto object-cover rounded-full h-10 w-10"
                        />
                      </div>
                      <Tooltip
                        content={data.data.user_id.fullName}
                        placement="bottom"
                        trigger={
                          data.data.user_id.fullName.length > 36
                            ? "hover"
                            : "none"
                        }
                      >
                        <p className="text-gray-800 dark:text-white text-sm ml-4">
                          {data.data.user_id.fullName.length > 36
                            ? data.data.user_id.fullName.substring(0, 36) +
                              "..."
                            : data.data.user_id.fullName}
                        </p>
                      </Tooltip>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Section Event Image and Organizer End */}

          {/* Section Event Information & Price Start */}
          <section>
            <div className="mt-8 md:mt-12 mx-auto">
              <div className="grid overflow-hidden grid-cols-1 grid-rows-1 lg:grid-cols-3 lg:gap-9">
                <div className="lg:col-span-2">
                  <h2 className="text-xl font-black font-sans underline underline-offset-8 decoration-wavy">
                    Description
                  </h2>
                  <div className="mt-8"></div>
                  <div className="text-md dark:text-gray-400 description-wrapper">
                    {parse(data.data.description)}
                  </div>
                </div>
                <div className="flex flex-col gap-1 lg:gap-4">
                  <div
                    className={`${
                      isExpired(data.data.dateEnd) && "hidden"
                    } border-2 border-gray-100 rounded-lg h-fit mt-4 lg:mt-0`}
                  >
                    <div className="w-full block lg:mt-0 p-2 lg:p-4">
                      <a
                        href={data.data.url}
                        target="_blank"
                        rel="noreferrer"
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 flex justify-center items-center rounded-lg font-bold font-sans px-5 py-2.5 w-full dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 text-center"
                      >
                        Register Now
                      </a>
                    </div>
                  </div>
                  <div className="border-2 border-gray-100 rounded-lg h-fit mt-4 lg:mt-0">
                    <div className="w-full block lg:mt-0 p-2 lg:p-4">
                      <RWebShare
                        data={{
                          text: "Checkout this event",
                          url: `${currentUrl}`,
                          title: `${data.data.title}`,
                        }}
                        onClick={() => console.log("shared successfully!")}
                      >
                        <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 flex w-full justify-center items-center text-center mb-0">
                          Share Events{" "}
                          <i className="text-lg ml-2">
                            <IoShareSocialSharp />
                          </i>
                        </button>
                      </RWebShare>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Section Event Information & Price End */}

          {/* Section Event Related Start */}
          <section className="mb-8 md:mb-12 lg:mb-16">
            <div className="mt-8 md:mt-12 mx-auto">
              <div className="grid">
                <div className="lg:col-span-2">
                  <h2 className="text-xl font-black font-sans underline underline-offset-8 decoration-wavy">
                    Maybe you also like
                  </h2>

                  <div className="grid mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-3 lg:gap-4 items-stretch py-4">
                    {/* Event List Start */}
                    {eventsRandom.data.data.slice(0, 4).map((event) => (
                      <EventItem key={event.id} {...event} />
                    ))}
                    {/* Event List End */}
                  </div>
                </div>

                <div className="border-2 border-gray-100 rounded-lg h-fit mt-4 lg:mt-0"></div>
              </div>
            </div>
          </section>
          {/* Section Event Related End */}
        </div>
      </article>

      <footer>
        <FooTer />
      </footer>
    </>
  );
};

export default EventsDetail;
