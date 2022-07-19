import { TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import FooTer from "../components/FooTer";
import Head from "../components/Head";
import NavBar from "../components/NavBar";
import { abbreviateNumber, INDONESIAN_SYMBOL } from "../utils/abbreviateNumber";

const Events = () => {
  return (
    <>
      <Head title="Events" />

      <header>
        <NavBar />
      </header>

      <article>
        <div className="container mx-auto px-4 mt-8 md:px-8 lg:px-12 xl:mt-12 xl:px-16">
          {/* Section Name Start */}
          <section className="mx-auto lg:items-center lg:flex">
            <div className="max-w-xl mx-auto text-center">
              <h1 className="text-3xl font-black font-sans sm:text-5xl flex flex-col justify-center items-center gap-">
                Find Insightful
                <strong className="font-extrabold text-green-700 block">
                  and Interesting Events.
                </strong>
              </h1>
              <p className="mt-2 lg:mt-4 sm:leading-relaxed sm:text-lg">
                Develop yourself, find insightful and interesting online events
                and webinars here.
              </p>
            </div>
          </section>
          {/* Section Name End */}

          {/* Section Main Start */}
          <section>
            <div className="max-w-screen-xl mt-8 md:mt-12 lg:mt-16 mx-auto mb-8 md:mb-12 lg:mb-16">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-start">
                {/* Section Aside Start */}
                <div className="lg:sticky lg:top-4">
                  <div className="overflow-hidden border border-gray-200 rounded-lg none md:block">
                    <summary className="flex items-center justify-between px-5 py-3 bg-gray-100 lg:hidden">
                      <span className="text-sm font-medium">
                        Toggle Filters
                      </span>
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </summary>
                    <form
                      action=""
                      className="border-t border-gray-200 lg:border-t-0"
                    >
                      <fieldset>
                        <legend className="block w-full px-5 py-3 text-base font-sans font-medium bg-gray-50">
                          Category
                        </legend>
                        <div className="px-5 py-6 space-y-2">
                          <div className="flex items-center">
                            <input
                              id="game"
                              type="checkbox"
                              name="type[game]"
                              className="w-5 h-5 border-gray-300 rounded"
                            />
                            <label
                              htmlFor="game"
                              className="ml-3 text-sm font-medium"
                            >
                              Game
                            </label>
                          </div>
                          <div className="flex items-center">
                            <input
                              id="outdoor"
                              type="checkbox"
                              name="type[outdoor]"
                              className="w-5 h-5 border-gray-300 rounded"
                            />
                            <label
                              htmlFor="outdoor"
                              className="ml-3 text-sm font-medium"
                            >
                              Outdoor
                            </label>
                          </div>
                          <div className="pt-2">
                            <button
                              type="button"
                              className="text-xs font-sans text-gray-500 underline"
                            >
                              Reset Type
                            </button>
                          </div>
                        </div>
                      </fieldset>
                      <div>
                        <fieldset>
                          <legend className="block w-full px-5 py-3 text-base font-sans font-medium bg-gray-50">
                            Type
                          </legend>
                          <div className="px-5 py-6 space-y-2">
                            <div className="flex items-center">
                              <input
                                id="paid"
                                type="checkbox"
                                name="paid"
                                className="w-5 h-5 border-gray-300 rounded"
                              />
                              <label
                                htmlFor="paid"
                                className="ml-3 text-sm font-medium"
                              >
                                Paid
                              </label>
                            </div>
                            <div className="flex items-center">
                              <input
                                id="free"
                                type="checkbox"
                                name="free"
                                className="w-5 h-5 border-gray-300 rounded"
                              />
                              <label
                                htmlFor="free"
                                className="ml-3 text-sm font-medium"
                              >
                                Free
                              </label>
                            </div>
                            <div className="pt-2">
                              <button
                                type="button"
                                className="text-xs font-sans text-gray-500 underline"
                              >
                                Reset Age
                              </button>
                            </div>
                          </div>
                        </fieldset>
                      </div>
                      <div className="flex justify-between px-5 py-3 border-t border-gray-200">
                        <button
                          name="reset"
                          type="button"
                          className="text-xs font-sans font-medium text-gray-600 underline rounded"
                        >
                          Reset All
                        </button>
                        <button
                          name="commit"
                          type="button"
                          className="px-5 py-3 text-xs font-sans font-medium text-white bg-green-600 rounded"
                        >
                          Apply Filters
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                {/* Section Aside End */}

                {/* Section Events Start */}
                <div className="lg:col-span-3">
                  <div className="flex items-center justify-between">
                    <div className="w-full">
                      <TextInput
                        id="search"
                        type="text"
                        placeholder="Input Keyword ..."
                      />
                    </div>
                    <div className="ml-4">
                      <div id="select">
                        <select
                          id="countries"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option selected="">Sort</option>
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="FR">France</option>
                          <option value="DE">Germany</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 mt-4 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-3 lg:gap-4 items-stretch">
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

                  {/* Pagination Start */}
                  <div className="mt-8">
                    <ol className="flex justify-center lg:justify-start space-x-1 text-xs font-medium">
                      <li>
                        <a
                          href="?page=1"
                          className="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3 h-3"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="?page=1"
                          className="block w-8 h-8 leading-8 text-center border border-gray-100 rounded"
                        >
                          {" "}
                          1{" "}
                        </a>
                      </li>
                      <li className="block w-8 h-8 leading-8 text-center text-white bg-green-600 border-green-600 rounded">
                        2
                      </li>
                      <li>
                        <a
                          href="?page=3"
                          className="block w-8 h-8 leading-8 text-center border border-gray-100 rounded"
                        >
                          {" "}
                          3{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="?page=4"
                          className="block w-8 h-8 leading-8 text-center border border-gray-100 rounded"
                        >
                          {" "}
                          4{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="?page=3"
                          className="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-3 h-3"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ol>
                  </div>
                  {/* Pagination End */}
                </div>
                {/* Section Events End */}
              </div>
            </div>
          </section>
          {/* Section Main End */}
        </div>
      </article>

      <footer>
        <FooTer />
      </footer>
    </>
  );
};

export default Events;
