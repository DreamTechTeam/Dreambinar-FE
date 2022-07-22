import { useQuery } from "@tanstack/react-query";
import { Pagination, TextInput } from "flowbite-react";
import React, { useState } from "react";
import strapi from "../api/strapi";
import FooTer from "../components/FooTer";
import Head from "../components/Head";
import NavBar from "../components/NavBar";
import EventList from "../components/Events/EventList";
import { GiHamburgerMenu } from "react-icons/gi";
import { Spinner, Radio } from "flowbite-react";
import { useForm } from "react-hook-form";

const Events = () => {
  const [page, setPage] = useState(1);
  const [keywords, setKeywords] = useState("");
  const [sorting, setSorting] = useState("");
  const [category, setCategory] = useState(null);
  const [isPaid, setIsPaid] = useState(null);
  const [isOnline, setIsOnline] = useState(null);
  const [asideFilterToggled, setAsideFilterToggled] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const fetchEvents = async (
    page,
    category = null,
    isPaid = null,
    isOnline = null,
    keywords = "",
    sorting = ""
  ) => {
    try {
      const pageCondition = category || isPaid !== null ? 1 : page;
      const categoryCondition =
        category !== null
          ? `&filters[category][name][$containsi]=${category}`
          : "";
      const paidCondition =
        isPaid !== null ? `&filters[isPaid][$containsi]=${isPaid}` : "";
      const isOnlineCondition =
        isOnline !== null ? `&filters[isOnline][$containsi]=${isOnline}` : "";
      const keywordsCondition =
        keywords !== "" ? `&filters[title][$containsi]=${keywords}` : "";

      const sortingCondition = (value) => {
        let query = `&sort[0]=id`;
        switch (value) {
          case "ASC":
            query = `&sort[0]=title%3Aasc`;
            break;
          case "DESC":
            query = `&sort[0]=title%3Adesc`;
            break;
          case "HIGH_PRICE":
            query = `&sort[0]=price%3Adesc`;
            break;
          case "LOW_PRICE":
            query = `&sort[0]=price%3Aasc`;
            break;
          case "LATEST_EVENT":
            query = `&sort[0]=createdAt%3Adesc`;
            break;
          case "OLDEST_EVENT":
            query = `&sort[0]=createdAt%3Aasc`;
            break;

          default:
            query = `&sort[0]=id`;
            break;
        }
        return query;
      };

      const sortingValue = sortingCondition(sorting);

      const response = await strapi.get(
        `/events?populate[0]=user_id.profileImg&populate[1]=eventImages&populate[2]=category${sortingValue}&filters[isDraft][$eq]=false&pagination[page]=${pageCondition}&pagination[pageSize]=6${categoryCondition}${paidCondition}${isOnlineCondition}${keywordsCondition}`,
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

  const { data, isSuccess, isError, refetch, isLoading } = useQuery(
    ["events", page, category, isPaid, isOnline, keywords, sorting],
    () => fetchEvents(page, category, isPaid, isOnline, keywords, sorting)
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

  const onSearchChange = (e) => {
    setPage(1);
    setKeywords(e.target.value);

    refetch();
  };

  const onSortingChange = (e) => {
    setPage(1);
    setSorting(e.target.value);

    refetch();
  };

  const onFilterSubmit = (data) => {
    setPage(1);
    setCategory(data.category);
    setIsPaid(data.isPaid);
    setIsOnline(data.isOnline);

    refetch();
  };

  const onFilterReset = () => {
    reset({
      category: null,
      isPaid: null,
    });

    setPage(1);
    setCategory(null);
    setIsPaid(null);
    setIsOnline(null);

    refetch();
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
                      onSubmit={handleSubmit(onFilterSubmit)}
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
                                <Radio
                                  color="success"
                                  id={name}
                                  name="categories"
                                  value={name}
                                  defaultChecked={false}
                                  {...register("category", { required: false })}
                                />
                                <label
                                  htmlFor={name}
                                  className="ml-3 text-sm font-medium"
                                >
                                  {name}
                                </label>
                              </div>
                            ))}
                        </div>
                      </fieldset>
                      {/* Field Filter Category End */}

                      {/* Field Filter Paid or Free Start */}
                      <div>
                        <fieldset>
                          <legend className="block w-full px-5 py-3 text-base font-sans font-medium bg-gray-50">
                            Pricing
                          </legend>
                          <div className="px-5 py-6 space-y-2">
                            <div className="flex items-center">
                              <Radio
                                id="paid"
                                name="isPaid"
                                value={true}
                                defaultChecked={false}
                                {...register("isPaid", { required: false })}
                              />
                              <label
                                htmlFor="paid"
                                className="ml-3 text-sm font-medium"
                              >
                                Paid
                              </label>
                            </div>

                            <div className="flex items-center">
                              <Radio
                                id="free"
                                name="isPaid"
                                value={false}
                                defaultChecked={false}
                                {...register("isPaid", { required: false })}
                              />
                              <label
                                htmlFor="free"
                                className="ml-3 text-sm font-medium"
                              >
                                Free
                              </label>
                            </div>
                          </div>
                        </fieldset>
                      </div>
                      {/* Field Filter Paid or Free End */}

                      {/* Field Filter Type Start */}
                      <div>
                        <fieldset>
                          <legend className="block w-full px-5 py-3 text-base font-sans font-medium bg-gray-50">
                            Type
                          </legend>
                          <div className="px-5 py-6 space-y-2">
                            <div className="flex items-center">
                              <Radio
                                id="online"
                                name="isOnline"
                                value={true}
                                defaultChecked={false}
                                {...register("isOnline", { required: false })}
                              />
                              <label
                                htmlFor="online"
                                className="ml-3 text-sm font-medium"
                              >
                                Online
                              </label>
                            </div>

                            <div className="flex items-center">
                              <Radio
                                id="offline"
                                name="isOnline"
                                value={false}
                                defaultChecked={false}
                                {...register("isOnline", { required: false })}
                              />
                              <label
                                htmlFor="offline"
                                className="ml-3 text-sm font-medium"
                              >
                                Offline
                              </label>
                            </div>
                          </div>
                        </fieldset>
                      </div>
                      {/* Field Filter Type End */}
                      <div className="flex justify-between px-5 py-3 border-t border-gray-200">
                        <button
                          onClick={onFilterReset}
                          type="reset"
                          className="text-xs font-sans font-medium text-gray-600 hover:text-green-700 hover:font-bold rounded"
                        >
                          Reset All
                        </button>
                        <button
                          name="commit"
                          type="submit"
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
                  <div className="grid grid-cols-3 grid-rows-1 items-center gap-4">
                    <div className="w-full col-span-2">
                      <TextInput
                        id="search"
                        type="text"
                        placeholder="Find Events ..."
                        value={keywords}
                        onChange={onSearchChange}
                      />
                    </div>
                    <div className="w-full">
                      <div id="select">
                        <select
                          id="countries"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          onChange={onSortingChange}
                        >
                          <option value="">Sort</option>
                          <option value="ASC">Event Name (A-Z)</option>
                          <option value="DESC">Event Name (Z-A)</option>
                          <option value="HIGH_PRICE">Price (High)</option>
                          <option value="LOW_PRICE">Price (Low)</option>
                          <option value="LATEST_EVENT">Latest Event</option>
                          <option value="OLDEST_EVENT">Oldest Event</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {/* Search & Sort Events Start */}

                  {isError && (
                    <div className="mt-8 flex justify-center items-center w-full h-[21.25rem]">
                      <h2>Error!</h2>
                    </div>
                  )}

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
