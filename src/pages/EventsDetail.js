import React from "react";
import Head from "../components/Head";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaMoneyBillWave,
} from "react-icons/fa";
import FooTer from "../components/FooTer";
import { abbreviateNumber, INDONESIAN_SYMBOL } from "../utils/abbreviateNumber";

const EventsDetail = () => {
  return (
    <>
      <Head title="Events" />

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
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                    Ocean Dream Samudra
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          {/* Section Breadcrumbs End */}

          {/* Section Event Image and Organizer Start */}
          <div className="grid overflow-hidden grid-cols-1 grid-rows-1 lg:gap-9 lg:grid-cols-3 mt-4 lg:h-full">
            <div className="box lg:col-span-2 bg-[url('https://s3-ap-southeast-1.amazonaws.com/loket-production-sg/images/banner/20210916052758.jpg')] rounded-lg bg-center bg-cover h-72 lg:h-full lg:items-stretch"></div>
            <div className="box lg:col-start-3 rounded-lg lg:border-2 lg:border-gray-100">
              <div className="w-full block mt-4 lg:mt-0 lg:p-4">
                <div className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 rounded-lg dark:bg-yellow-200 dark:text-yellow-900 mb-2 max-w-fit">
                  <p className="py-2 px-4">Wisata & Liburan</p>
                </div>
                <p className="text-gray-800 dark:text-white text-xl font-black font-sans mb-5">
                  Ocean Dream Samudra
                </p>

                <div className="flex flex-col gap-2 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-700 rounded h-6 w-6 flex justify-center items-center">
                      <p className="text-white">
                        <FaCalendarAlt />
                      </p>
                    </div>
                    <p className="text-md font-medium items-stretch flex justify-center">
                      25 Juni - 31 Juli 2022
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-green-700 rounded h-6 w-6 flex justify-center items-center">
                      <p className="text-white">
                        <FaClock />
                      </p>
                    </div>
                    <p className="text-md font-medium items-stretch flex justify-center">
                      10:00 - 23:00 WIB
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-green-700 rounded h-6 w-6 flex justify-center items-center">
                      <p className="text-white">
                        <FaMapMarkerAlt />
                      </p>
                    </div>
                    <p className="text-md font-medium items-stretch flex justify-center">
                      Ocean Dream Samudra, DKI Jakarta
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-green-700 rounded h-6 w-6 flex justify-center items-center">
                      <p className="text-white">
                        <FaMoneyBillWave />
                      </p>
                    </div>
                    <p className="text-md font-medium items-stretch flex justify-center">
                      Rp. 350.000
                    </p>
                  </div>
                </div>

                <div>
                  <div className="border-t-2 border-dotted my-3"></div>
                  <div className="flex items-center">
                    <div className="block">
                      <img
                        alt="profil"
                        src="https://www.tailwind-kit.com/images/person/6.jpg"
                        className="mx-auto object-cover rounded-full h-10 w-10 "
                      />
                    </div>
                    <p className="text-gray-800 dark:text-white text-sm ml-4">
                      Jean Jancques
                    </p>
                  </div>
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
                  <div className="mt-8">
                    <p className="text-md dark:text-gray-400">
                      <strong className="font-black text-gray-800 dark:text-white">
                        Wengi
                      </strong>{" "}
                      merupakan sebuah wahana di mana penonton dapat merasakan
                      apa yang dialami seorang psychic light trance medium
                      melalui virtual reality experience. Event ini menantang
                      keberanian penonton serta memberikan pengalaman yang tak
                      terlupakan.
                    </p>
                    <p>
                      Tujuan dari wahana ini tidak lain hanya untuk menghibur
                      dan memberikan gambaran bahwa di dalam kegelapan pasti
                      selalu ada cahaya.
                    </p>
                  </div>
                </div>

                <div className="border-2 border-gray-100 rounded-lg h-fit mt-4 lg:mt-0">
                  <div className="w-full block lg:mt-0 p-2 lg:p-4">
                    <button
                      type="button"
                      className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 w-full dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                    >
                      Register Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Section Event Information & Price End */}

          {/* Section Event Related Start */}
          <section>
            <div className="mt-8 md:mt-12 mx-auto">
              <div className="grid">
                <div className="lg:col-span-2">
                  <h2 className="text-xl font-black font-sans underline underline-offset-8 decoration-wavy">
                    Related Events
                  </h2>

                  <div className="grid mt-8 grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-3 lg:gap-4 items-stretch py-4">
                    {/* Event List Start */}
                    <Link
                      to="/events/1"
                      className="overflow-hidden shadow-lg rounded-lg h-full w-full cursor-pointer m-auto"
                    >
                      <div className="w-full block">
                        <img
                          alt="blog"
                          src="https://www.tailwind-kit.com/images/blog/1.jpg"
                          className="max-h-40 w-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <div className="w-full block h-full">
                          <p className="text-gray-800 dark:text-white text-xl h-14 font-black font-sans mb-1">
                            Mentega Krisna !
                          </p>
                          <p className="text-green-500 text-md font-medium mb-2">
                            19 Juli 2022
                          </p>
                          <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
                            {abbreviateNumber(250000, INDONESIAN_SYMBOL)} /
                            Orang
                          </span>
                        </div>
                      </div>
                      <div className="p-4 pt-0">
                        <div className="border-t-2 my-3"></div>
                        <div className="flex items-center">
                          <div className="block">
                            <img
                              alt="profil"
                              src="https://www.tailwind-kit.com/images/person/6.jpg"
                              className="mx-auto object-cover rounded-full h-10 w-10 "
                            />
                          </div>
                          <p className="text-gray-800 dark:text-white text-sm ml-4">
                            Jean Jancques
                          </p>
                        </div>
                      </div>
                    </Link>

                    <Link
                      to="/events/1"
                      className="overflow-hidden shadow-lg rounded-lg h-full w-full cursor-pointer m-auto"
                    >
                      <div className="w-full block">
                        <img
                          alt="blog"
                          src="https://www.tailwind-kit.com/images/blog/1.jpg"
                          className="max-h-40 w-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <div className="w-full block h-full">
                          <p className="text-gray-800 dark:text-white text-xl h-14 font-black font-sans mb-1">
                            Mentega Krisna !
                          </p>
                          <p className="text-green-500 text-md font-medium mb-2">
                            19 Juli 2022
                          </p>
                          <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
                            {abbreviateNumber(250000, INDONESIAN_SYMBOL)} /
                            Orang
                          </span>
                        </div>
                      </div>
                      <div className="p-4 pt-0">
                        <div className="border-t-2 my-3"></div>
                        <div className="flex items-center">
                          <div className="block">
                            <img
                              alt="profil"
                              src="https://www.tailwind-kit.com/images/person/6.jpg"
                              className="mx-auto object-cover rounded-full h-10 w-10 "
                            />
                          </div>
                          <p className="text-gray-800 dark:text-white text-sm ml-4">
                            Jean Jancques
                          </p>
                        </div>
                      </div>
                    </Link>

                    <Link
                      to="/events/1"
                      className="overflow-hidden shadow-lg rounded-lg h-full w-full cursor-pointer m-auto"
                    >
                      <div className="w-full block">
                        <img
                          alt="blog"
                          src="https://www.tailwind-kit.com/images/blog/1.jpg"
                          className="max-h-40 w-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <div className="w-full block h-full">
                          <p className="text-gray-800 dark:text-white text-xl h-14 font-black font-sans mb-1">
                            Mentega Krisna !
                          </p>
                          <p className="text-green-500 text-md font-medium mb-2">
                            19 Juli 2022
                          </p>
                          <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
                            {abbreviateNumber(250000, INDONESIAN_SYMBOL)} /
                            Orang
                          </span>
                        </div>
                      </div>
                      <div className="p-4 pt-0">
                        <div className="border-t-2 my-3"></div>
                        <div className="flex items-center">
                          <div className="block">
                            <img
                              alt="profil"
                              src="https://www.tailwind-kit.com/images/person/6.jpg"
                              className="mx-auto object-cover rounded-full h-10 w-10 "
                            />
                          </div>
                          <p className="text-gray-800 dark:text-white text-sm ml-4">
                            Jean Jancques
                          </p>
                        </div>
                      </div>
                    </Link>

                    <Link
                      to="/events/1"
                      className="overflow-hidden shadow-lg rounded-lg h-full w-full cursor-pointer m-auto"
                    >
                      <div className="w-full block">
                        <img
                          alt="blog"
                          src="https://www.tailwind-kit.com/images/blog/1.jpg"
                          className="max-h-40 w-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <div className="w-full block h-full">
                          <p className="text-gray-800 dark:text-white text-xl h-14 font-black font-sans mb-1">
                            Mentega Krisna !
                          </p>
                          <p className="text-green-500 text-md font-medium mb-2">
                            19 Juli 2022
                          </p>
                          <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
                            {abbreviateNumber(250000, INDONESIAN_SYMBOL)} /
                            Orang
                          </span>
                        </div>
                      </div>
                      <div className="p-4 pt-0">
                        <div className="border-t-2 my-3"></div>
                        <div className="flex items-center">
                          <div className="block">
                            <img
                              alt="profil"
                              src="https://www.tailwind-kit.com/images/person/6.jpg"
                              className="mx-auto object-cover rounded-full h-10 w-10 "
                            />
                          </div>
                          <p className="text-gray-800 dark:text-white text-sm ml-4">
                            Jean Jancques
                          </p>
                        </div>
                      </div>
                    </Link>

                    <Link
                      to="/events/1"
                      className="overflow-hidden shadow-lg rounded-lg h-full w-full cursor-pointer m-auto"
                    >
                      <div className="w-full block">
                        <img
                          alt="blog"
                          src="https://www.tailwind-kit.com/images/blog/1.jpg"
                          className="max-h-40 w-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <div className="w-full block h-full">
                          <p className="text-gray-800 dark:text-white text-xl h-14 font-black font-sans mb-1">
                            Mentega Krisna !
                          </p>
                          <p className="text-green-500 text-md font-medium mb-2">
                            19 Juli 2022
                          </p>
                          <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">
                            {abbreviateNumber(250000, INDONESIAN_SYMBOL)} /
                            Orang
                          </span>
                        </div>
                      </div>
                      <div className="p-4 pt-0">
                        <div className="border-t-2 my-3"></div>
                        <div className="flex items-center">
                          <div className="block">
                            <img
                              alt="profil"
                              src="https://www.tailwind-kit.com/images/person/6.jpg"
                              className="mx-auto object-cover rounded-full h-10 w-10 "
                            />
                          </div>
                          <p className="text-gray-800 dark:text-white text-sm ml-4">
                            Jean Jancques
                          </p>
                        </div>
                      </div>
                    </Link>
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
