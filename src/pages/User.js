import { useQuery } from "@tanstack/react-query";
import { Pagination, Spinner } from "flowbite-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import strapi from "../api/strapi";
import EventItem from "../components/Events/EventItem";
import FooTer from "../components/FooTer";
import Head from "../components/Head";
import NavBar from "../components/NavBar";

const User = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const fetchUser = async (id) => {
    try {
      const response = await strapi.get(
        `/users/${id}?populate[0]=profileImg&populate[1]=events`,
        {
          headers: {
            Authorization:
              "Bearer 2705bddd81d2b0875e6d5fed27debd33c59b4909b934ab3b5dae1ac35f4c45e30b4d0ccff1241b465d391fbd9052ca8b6f9830ce518d259035294e5e9307efe3b407618300309ea59a0783b887189fffd7c95a4a0c4ccd83ac8ccd63b73413c4643dd9078fb607248a8671455f188e7667a5c6046caa98f61b0959b31b6e8f64",
          },
        }
      );

      if (response.status === 204) {
        console.clear();
        navigate("/404");
      }

      return response.data;
    } catch (error) {
      console.clear();
      navigate("/404");
    }
  };

  const fetchUserEvents = async (id, page = 1) => {
    try {
      const response = await strapi.get(
        `/events?populate[0]=category&populate[1]=user_id.profileImg&populate[2]=eventImages&filters[user_id][id][$eq]=${id}&sort[0]=createdAt%3Adesc&pagination[page]=${page}&pagination[pageSize]=4`,
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

  const { data, isSuccess, isLoading, isError } = useQuery(
    ["userDetail", id],
    () => fetchUser(id)
  );

  const userEventsQuery = useQuery(["userEvents", id, page], () =>
    fetchUserEvents(id, page)
  );

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-screen h-screen">
        <Spinner aria-label="Center-aligned spinner example" size="xl" />
      </div>
    );
  }

  if (isError || userEventsQuery.isError)
    return (
      <div className="flex justify-center items-center w-screen h-screen">
        <h1>Error!</h1>
      </div>
    );

  const profileImage =
    data.profileImg && data.profileImg.url !== ""
      ? data.profileImg.url
      : "https://via.placeholder.com/150";

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
  };

  return (
    <>
      <Head
        title={`${data.fullName ? data.fullName : "User Not Found"} Profile`}
      />

      <header>
        <NavBar />
      </header>

      <main>
        {/* Hero start */}
        <section>
          <div className="h-2/4 sm:h-64 xl:h-[22.5rem] overflow-hidden">
            <img
              className="w-full object-cover"
              src="https://images.unsplash.com/photo-1502252430442-aac78f397426?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="hero"
            />
          </div>
          <div className="container mx-auto px-4 mt-8 md:px-8 lg:px-12 xl:mt-12 xl:px-16">
            <div className="flex justify-start -mt-20 lg:-mt-28 xl:-mt-32 mb-5">
              <span clspanss="block relative h-32 w-32">
                <img
                  alt="by aldi sigun on Unsplash"
                  src={profileImage}
                  className="mx-auto object-cover rounded-lg h-24 w-24 lg:h-40 lg:w-40 bg-white p-1"
                />
              </span>
            </div>
            <div className="mb-8">
              <div className="grid overflow-hidden grid-cols-1 grid-rows-1 lg:grid-cols-3 lg:gap-9">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-black font-sans text-green-800 dark:text-gray-300">
                    {data.fullName}
                  </h2>
                  <p className="mt-2 text-md dark:text-gray-400 description-wrapper">
                    {data.bio || ""}
                  </p>
                </div>
                <div className="flex flex-col gap-1 lg:gap-4">
                  <div className="border-2 border-gray-100 rounded-lg h-fit mt-4 lg:mt-0">
                    <div className="w-full block lg:mt-0 p-2 lg:p-4">
                      <a
                        href={`mailto:${data.email || "example@mail.com"}`}
                        target="_blank"
                        rel="noreferrer"
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 flex justify-center items-center rounded-lg font-bold font-sans px-5 py-2.5 w-full dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 text-center"
                      >
                        Email
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Hero end */}

        <div className="container mx-auto px-4 mt-8 md:px-8 lg:px-12 xl:mt-12 xl:px-16 md:mt-12 lg:mt-16">
          <h2 className="text-xl font-black font-sans underline underline-offset-8 decoration-wavy">
            Events
          </h2>
        </div>
        <div>
          {isLoading && (
            <div className="flex justify-center items-center w-full h-[26.125rem]">
              <Spinner aria-label="Center-aligned spinner example" size="xl" />
            </div>
          )}

          {/* Event List Start */}
          {isSuccess && (
            <div className="container px-4 md:px-12 lg:px-16 mx-auto grid mt-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-3 lg:gap-4 items-stretch py-4">
              {/* Event List Start */}
              {userEventsQuery.data.data.map((event) => (
                <EventItem key={event.id} {...event} />
              ))}
              {/* Event List End */}
            </div>
          )}
          {/* Event List End */}

          {/* Pagination Start */}
          {isSuccess &&
          userEventsQuery.data.meta.pagination.total >
            userEventsQuery.data.meta.pagination.pageSize &&
          page < 2 ? (
            <div
              className={`mt-8 [&>button]:bg-green-50 container mx-auto px-4 md:px-12 lg:px-16 flex justify-center lg:justify-end`}
            >
              <Pagination
                currentPage={page}
                totalPages={userEventsQuery.data.meta.pagination.pageCount}
                onPageChange={(page) =>
                  onPagePaginationChange(page, userEventsQuery.data)
                }
              />
            </div>
          ) : (
            ""
          )}
          {isSuccess && page > 1 ? (
            <div
              className={`mt-8 [&>button]:bg-green-50 container mx-auto px-4 md:px-12 lg:px-16 flex justify-center lg:justify-end`}
            >
              <Pagination
                currentPage={page}
                totalPages={userEventsQuery.data.meta.pagination.pageCount}
                onPageChange={(page) =>
                  onPagePaginationChange(page, userEventsQuery.data)
                }
              />
            </div>
          ) : (
            ""
          )}
          {/* Pagination End */}
        </div>
      </main>

      <footer>
        <FooTer />
      </footer>
    </>
  );
};

export default User;
