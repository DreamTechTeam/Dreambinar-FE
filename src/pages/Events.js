import { useQuery } from "@tanstack/react-query";
import { Pagination, TextInput } from "flowbite-react";
import React, { useState } from "react";
import strapi from "../api/strapi";
import FooTer from "../components/FooTer";
import Head from "../components/Head";
import NavBar from "../components/NavBar";
import EventList from "../components/Events/EventList";
import { GiHamburgerMenu } from "react-icons/gi";
import { Spinner } from "flowbite-react";

const Events = () => {
  const [page, setPage] = useState(1);
  const [keywords, setKeywords] = useState("");
  const [asideFilterToggled, setAsideFilterToggled] = useState(false);

  const fetchEvents = async (page) => {
    try {
      const response = await strapi.get(
        `/events?populate[0]=user_id.profileImg&populate[1]=eventImages&populate[2]=category&sort[0]=id&pagination[page]=${page}&pagination[pageSize]=6&filters[title][$containsi]=${keywords}`,
        {
          headers: {
            Authorization:
              "Bearer 2705bddd81d2b0875e6d5fed27debd33c59b4909b934ab3b5dae1ac35f4c45e30b4d0ccff1241b465d391fbd9052ca8b6f9830ce518d259035294e5e9307efe3b407618300309ea59a0783b887189fffd7c95a4a0c4ccd83ac8ccd63b73413c4643dd9078fb607248a8671455f188e7667a5c6046caa98f61b0959b31b6e8f64",
          },
        }
      );

      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  const fetchCategory = async () => {
    try {
      const response = await strapi.get(`/categories`, {
        headers: {
          Authorization:
            "Bearer 2705bddd81d2b0875e6d5fed27debd33c59b4909b934ab3b5dae1ac35f4c45e30b4d0ccff1241b465d391fbd9052ca8b6f9830ce518d259035294e5e9307efe3b407618300309ea59a0783b887189fffd7c95a4a0c4ccd83ac8ccd63b73413c4643dd9078fb607248a8671455f188e7667a5c6046caa98f61b0959b31b6e8f64",
        },
      });

      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  };

  const { data, isSuccess, isError, isLoading } = useQuery(
    ["events", page, keywords],
    () => fetchEvents(page)
  );
  const categories = useQuery(["categories"], fetchCategory);

  const onPagePaginationChange = (page, data) => {
    if (page < 1) {
      setPage(1);
      return true;
    }

    if (page > data.meta.pagination.pageCount) {
      setPage(data.meta.pagination.pageCount);
      return true;
    }

    setPage(page);
    window.scrollTo(0, 0);
  };

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
                <div className="lg:sticky lg:top-4 mb-2 lg:mb-0">
                  <div className="overflow-hidden border border-gray-200 rounded-lg none md:block">
                    <summary className="flex items-center justify-between px-5 py-3 bg-gray-100 lg:hidden">
                      <span className="text-sm font-medium">
                        Toggle Filters
                      </span>
                      <button
                        className={`inline-flex items-center p-2 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 cursor-pointer text-lg`}
                        onClick={() => {
                          setAsideFilterToggled(!asideFilterToggled);
                        }}
                      >
                        <GiHamburgerMenu />
                      </button>
                    </summary>
                    {/* Aside Filter Start */}
                    <form
                      className={`${
                        asideFilterToggled ? "hidden" : "block"
                      } lg:block border-t border-gray-200 lg:border-t-0`}
                    >
                      {/* Field Filter Category Start */}
                      <fieldset>
                        <legend className="block w-full px-5 py-3 text-base font-sans font-medium bg-gray-50">
                          Category
                        </legend>
                        {categories.isLoading && "Loading..."}
                        <div className="px-5 py-6 space-y-2">
                          {categories.isSuccess &&
                            categories.data.data.map(({ id, name }) => (
                              <div className="flex items-center" key={id}>
                                <input
                                  id={name}
                                  type="checkbox"
                                  name={`type[${name}]`}
                                  className="w-5 h-5 border-gray-300 rounded"
                                />
                                <label
                                  htmlFor={name}
                                  className="ml-3 text-sm font-medium"
                                >
                                  {name}
                                </label>
                              </div>
                            ))}
                          <div className="pt-2">
                            <button
                              type="reset"
                              className="text-xs font-sans text-gray-500 underline"
                            >
                              Reset Type
                            </button>
                          </div>
                        </div>
                      </fieldset>
                      {/* Field Filter Category Start */}
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
                    {/* Aside Filter End */}
                  </div>
                </div>
                {/* Section Aside End */}

                {/* Section Events Start */}

                {/* Search & Sort Events Start */}
                <div className="lg:col-span-3">
                  <div className="flex items-center justify-between">
                    <div className="w-full">
                      <TextInput
                        id="search"
                        type="text"
                        placeholder="Find Events ..."
                        value={keywords}
                        onChange={(e) => {
                          setKeywords(e.target.value);
                          setPage(1);
                        }}
                      />
                    </div>
                    <div className="ml-4">
                      <div id="select">
                        <select
                          id="countries"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option value="">Sort</option>
                          <option value="US">United States</option>
                          <option value="CA">Canada</option>
                          <option value="FR">France</option>
                          <option value="DE">Germany</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {/* Search & Sort Events Start */}

                  {isError && <p>Error</p>}

                  {isLoading && (
                    <div className="mt-8 flex justify-center items-center w-full h-[21.25rem]">
                      <Spinner
                        aria-label="Center-aligned spinner example"
                        size="xl"
                      />
                    </div>
                  )}

                  {isSuccess && data.data.length === 0 && (
                    <div className="mt-8 flex justify-center items-center w-full h-[21.25rem]">
                      <h2>Event is Empty!</h2>
                    </div>
                  )}

                  {/* Event List Start */}
                  {isSuccess && <EventList events={data} />}
                  {/* Event List End */}

                  {/* Pagination Start */}
                  {isSuccess &&
                  data.meta.pagination.total > data.meta.pagination.pageSize &&
                  page < 2 ? (
                    <div className={`mt-8 [&>button]:bg-green-50`}>
                      <Pagination
                        currentPage={page}
                        totalPages={data.meta.pagination.pageCount}
                        onPageChange={(page) =>
                          onPagePaginationChange(page, data)
                        }
                      />
                    </div>
                  ) : (
                    ""
                  )}
                  {isSuccess && page > 1 ? (
                    <div className={`mt-8 [&>button]:bg-green-50`}>
                      <Pagination
                        currentPage={page}
                        totalPages={data.meta.pagination.pageCount}
                        onPageChange={(page) =>
                          onPagePaginationChange(page, data)
                        }
                      />
                    </div>
                  ) : (
                    ""
                  )}
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
