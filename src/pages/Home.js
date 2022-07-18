import React from "react";
import { Link } from "react-router-dom";
import Head from "../components/Head";
import HomeFeatureList from "../components/Home/HomeFeatureList";
import NavBar from "../components/NavBar";
import { useQuery } from "react-query";
import strapi from "../api/strapi";
import { Button, Spinner } from "flowbite-react";
import FooTer from "../components/FooTer";
import HomeOrmawaList from "../components/Home/HomeOrmawaList";
import { FaAngleDown } from "react-icons/fa";
import axios from "axios";

const Home = () => {
  const fetchFeaturesList = async () => {
    try {
      const response = await strapi.get("/features?populate=*");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  const fetchOrmawaList = async () => {
    try {
      const response = await axios.get("http://localhost:3001/ormawa");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  // Queries
  const featuresQuery = useQuery(["features"], fetchFeaturesList, {
    retry: 10,
  });

  const ormawaQuery = useQuery(["ormawa"], fetchOrmawaList, {
    retry: 10,
  });

  if (featuresQuery.isError || ormawaQuery.isError) {
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="bg-red-600 text-white rounded-md">
          <p className="p-2">{featuresQuery.error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Head title="Home" />

      <header>
        <NavBar />
      </header>

      <article className="container mx-auto px-4 mt-8 md:px-8 lg:px-12 xl:mt-12 xl:px-16">
        {/* ====== Hero Section Start */}
        <section>
          <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1 gap-4 lg:gap-16 lg:grid-cols-2">
              <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:h-full lg:order-last">
                <img
                  className="absolute inset-0 object-cover w-full h-full"
                  src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80"
                  alt="Man using a computer"
                />
              </div>
              <div className="lg:py-12">
                <h2
                  className="text-dark
            font-black
            font-sans
            text-4xl
            sm:text-[42px]
            lg:text-[40px]
            xl:text-[42px]
            leading-snug
            mb-3l"
                >
                  Easy to Create <br />
                  And Search Event.
                </h2>
                <p className="mt-2 md:mt-4 sm:leading-relaxed sm:text-lg">
                  You can enjoy the feature, create your dream event easily,
                  just fill in the required data and share it with everyone,
                  then you can search for many events that other people have
                  shared and many other features.
                </p>
                <ul className="flex flex-wrap items-center gap-3 mt-4 md:mt-6 lg:mt-8">
                  <li>
                    <Link
                      to="/events"
                      className="py-4 px-6 sm:px-10 lg:px-8 xl:px-10 inline-flex items-center justify-center text-center text-white text-base bg-green-700 hover:bg-opacity-90 font-normal rounded-lg"
                    >
                      Get Started
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className=" py-4 px-6 sm:px-10 lg:px-8 xl:px-10 inline-flex items-center justify-center text-center  text-green-700  text-base border-2  border-green-700 hover:border-green-500 hover:text-green-500 font-bold rounded-lg"
                    >
                      About Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* ====== Hero Section End */}

        {/* ====== Stats Section Start */}
        <section>
          <div className="mt-8 md:mt-12 lg:mt-16">
            <div className="mb-4 md:mb-8">
              <h1 className="text-2xl md:text-3xl font-black font-sans text-center mb-2">
                Trusted By Event Organizer
              </h1>
              <p className="text-center text-base md:text-lg font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                dolores laborum <br /> labore provident impedit esse recusandae
                facere libero harum sequi.
              </p>
            </div>

            <div className="max-w-screen-xl mx-auto">
              <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg">
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Total Events
                  </dt>
                  <dd className="text-4xl font-black font-sans text-green-700 md:text-5xl">
                    100
                  </dd>
                </div>
                <div className="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg">
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Active Users
                  </dt>
                  <dd className="text-4xl font-black font-sans text-green-700 md:text-5xl">
                    86
                  </dd>
                </div>
                <div className="flex flex-col px-4 py-8 text-center border border-gray-100 rounded-lg">
                  <dt className="order-last text-lg font-medium text-gray-500">
                    Total Partner
                  </dt>
                  <dd className="text-4xl font-black font-sans text-green-700 md:text-5xl">
                    24
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
        {/* ====== Stats Section End */}

        {/* ====== Benefits Section Start */}
        <section>
          <div className="mt-8 md:mt-12 lg:mt-16">
            <div className="mb-4 md:mb-8">
              <h1 className="text-2xl md:text-3xl font-black font-sans text-center mb-2">
                Benefits You Get
              </h1>
              <p className="text-center text-base md:text-lg font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                dolores laborum <br /> labore provident impedit esse recusandae
                facere libero harum sequi.
              </p>
            </div>
          </div>

          {featuresQuery.isLoading && (
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 lg:w-1/4 px-4">
                <div className="h-80 rounded-[20px] bg-slate-300 shadow-md hover:shadow-lg mb-8 flex justify-center items-center">
                  <Spinner
                    aria-label="Center-aligned spinner example"
                    size="xl"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/4 px-4">
                <div className="h-80 rounded-[20px] bg-slate-300 shadow-md hover:shadow-lg mb-8 flex justify-center items-center">
                  <Spinner
                    aria-label="Center-aligned spinner example"
                    size="xl"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/4 px-4">
                <div className="h-80 rounded-[20px] bg-slate-300 shadow-md hover:shadow-lg mb-8 flex justify-center items-center">
                  <Spinner
                    aria-label="Center-aligned spinner example"
                    size="xl"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/4 px-4">
                <div className="h-80 rounded-[20px] bg-slate-300 shadow-md hover:shadow-lg mb-8 flex justify-center items-center">
                  <Spinner
                    aria-label="Center-aligned spinner example"
                    size="xl"
                  />
                </div>
              </div>
            </div>
          )}

          {featuresQuery.isSuccess && (
            <HomeFeatureList features={featuresQuery.data} />
          )}
        </section>
        {/* ====== Benefits Section End */}

        {/* ====== Ormawa List Section Start */}
        <section className="mb-8 md:mb-12 lg:mb-16">
          <div className="mt-8 md:mt-12 lg:mt-16">
            <div className="mb-4 md:mb-8">
              <h1 className="text-2xl md:text-3xl font-black font-sans text-center mb-2">
                Explore Ormawa
              </h1>
              <p className="text-center text-base md:text-lg font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                dolores laborum <br /> labore provident impedit esse recusandae
                facere libero harum sequi.
              </p>
            </div>
          </div>

          {ormawaQuery.isLoading && (
            <div className="flex justify-center items-center h-72">
              <Spinner aria-label="Center-aligned spinner example" size="xl" />
            </div>
          )}

          {ormawaQuery.isSuccess && (
            <>
              <HomeOrmawaList ormawa={ormawaQuery.data} />
              <div className="flex mt-6 md:mt-8">
                <div className="mx-auto">
                  <Button color={"light"}>
                    <div className="flex flex-col justify-center items-center px-4">
                      Show More
                      <div className="text-lg">
                        <FaAngleDown />
                      </div>
                    </div>
                  </Button>
                </div>
              </div>
            </>
          )}
        </section>
        {/* ====== Ormawa List Section End */}
      </article>

      <footer>
        <FooTer />
      </footer>
    </>
  );
};

export default Home;
