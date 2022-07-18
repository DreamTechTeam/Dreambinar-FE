import React from "react";
import Head from "../components/Head";
import NavBar from "../components/NavBar";
import strapi from "../api/strapi";
import AboutList from "../components/About/AboutList";
import {
  Button,
  Spinner,
  Label,
  TextInput,
  Textarea,
  Accordion,
} from "flowbite-react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import FooTer from "../components/FooTer";

const About = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const fetchDeveloperList = async () => {
    try {
      const response = await strapi.get("/developers?populate=*");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  // Queries
  const developerQuery = useQuery(["developers"], fetchDeveloperList, {
    retry: 10,
  });

  if (developerQuery.isError) {
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="bg-red-600 text-white rounded-md">
          <p className="p-2">{developerQuery.error.message}</p>
        </div>
      </div>
    );
  }

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <Head title="About" />

      <header>
        <NavBar />
      </header>

      <article className="container mx-auto px-4 mt-8 md:px-8 lg:px-12 xl:mt-12 xl:px-16">
        <div className="mx-auto lg:items-center lg:flex">
          <div className="max-w-xl mx-auto text-center">
            <h1 className="text-3xl font-black font-sans sm:text-5xl flex flex-col justify-center items-center">
              Know More
              <strong className="font-extrabold text-green-700 block">
                About Dreamtech.
              </strong>
            </h1>
            <p className="mt-4 sm:leading-relaxed sm:text-lg">
              Dreamtech was formed by people who have the same vision and
              mission and are a form of our dedication as IT enthusiasts. We
              want to create a technology with innovation that can benefit the
              wider community and need it supported by the latest technology.
            </p>
          </div>
        </div>
        {/* <div className=" rounded-md flex justify-center items-center lg:rounded-lg">
          <div className="p-8 md:p-16 lg:px-60 xl:px-80">
            <h1 className="text-2xl md:text-3xl font-black font-sans text-center mb-2 text-gray-800">
              Know About Dreamtech
            </h1>
            <p className="text-center font-light text-gray-800">
              Dreamtech was formed by people who have the same vision and
              mission and are a form of our dedication as IT enthusiasts. We
              want to create a technology with innovation that can benefit the
              wider community and need it supported by the latest technology.
            </p>
          </div>
        </div> */}

        <div className="mt-8 md:mt-12 lg:mt-16">
          <div className="mb-4 md:mb-8">
            <h1 className="text-2xl md:text-3xl font-black font-sans text-center mb-2">
              Meet Our Team
            </h1>
            <p className="text-center text-base md:text-lg font-light">
              lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          {developerQuery.isLoading && (
            <div className="grid grid-rows-3 grid-cols-1 md:grid-rows-1 md:grid-cols-3 gap-5 md:gap-3 lg:gap-4">
              <div className="h-96 md:h-80 lg:h-96 flex justify-center items-center bg-slate-300 rounded-md">
                <div className="text-center">
                  <Spinner
                    aria-label="Center-aligned spinner example"
                    size="xl"
                  />
                </div>
              </div>

              <div className="h-96 md:h-80 lg:h-96 flex justify-center items-center bg-slate-300 rounded-md">
                <div className="text-center">
                  <Spinner
                    aria-label="Center-aligned spinner example"
                    size="xl"
                  />
                </div>
              </div>

              <div className="h-96 md:h-80 lg:h-96 flex justify-center items-center bg-slate-300 rounded-md">
                <div className="text-center">
                  <Spinner
                    aria-label="Center-aligned spinner example"
                    size="xl"
                  />
                </div>
              </div>
            </div>
          )}
          {developerQuery.isSuccess && (
            <AboutList developers={developerQuery.data} />
          )}
        </div>

        <div className="mt-8 md:mt-12 lg:mt-16">
          <div className="mb-4 md:mb-8">
            <h1 className="text-2xl md:text-3xl font-black font-sans text-center mb-2">
              Let's Stay Connected
            </h1>
            <p className="text-center text-base md:text-lg font-light ">
              lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          {/* ====== Contact Section Start */}
          <section className="text-gray-600 body-font relative">
            <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap">
              <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                <iframe
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                  frameBorder={0}
                  title="map"
                  marginHeight={0}
                  marginWidth={0}
                  scrolling="no"
                  loading="lazy"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15843.05719814062!2d106.9340928!3d-6.9187572!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x261f558445241e0c!2sUniversitas%20Muhammadiyah%20Sukabumi!5e0!3m2!1sen!2sid!4v1658061919459!5m2!1sen!2sid"
                  style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
                />
                <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                  <div className="lg:w-1/2 px-6">
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                      ADDRESS
                    </h2>
                    <p className="mt-1">
                      Jl. R. Syamsudin, S.H. No. 50, Cikole, Kec. Cikole, Kota
                      Sukabumi, Jawa Barat 43113
                    </p>
                  </div>
                  <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                      EMAIL
                    </h2>
                    <p className="leading-relaxed">admin@dreamtechteam.me</p>
                    <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-2">
                      WHATSAPP
                    </h2>
                    <p className="leading-relaxed">+62 812 3456 7890</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                <h2 className="text-gray-900 text-lg mb-1 font-bold font-sans title-font">
                  Feedback
                </h2>
                <p className="leading-relaxed mb-3 text-gray-600">
                  lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>

                <form
                  className="flex flex-col gap-2"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  {/* {loading && (
                    <div className="absolute inset-0 z-10 bg-white/20" />
                  )} */}
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="fullname" value="Full Name*" />
                    </div>
                    <TextInput
                      color={errors.fullname && "failure"}
                      id="fullname"
                      type="text"
                      // disabled={loading}
                      {...register("fullname", { required: true })}
                    />
                    {errors.fullname && (
                      <p className="text-red-700 text-sm pt-1">
                        * This field is required
                      </p>
                    )}
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="email" value="Email*" />
                    </div>
                    <TextInput
                      color={errors.email && "failure"}
                      id="email"
                      type="email"
                      // disabled={loading}
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <p className="text-red-700 text-sm pt-1">
                        * This field is required
                      </p>
                    )}
                  </div>
                  <div>
                    <div className="mb-2 block">
                      <Label htmlFor="message" value="Message*" />
                    </div>
                    <Textarea
                      id="message"
                      color={errors.message && "failure"}
                      rows={4}
                      // disabled={loading}
                      {...register("message", { required: true })}
                    />
                    {errors.message && (
                      <p className="text-red-700 text-sm pt-1">
                        * This field is required
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    style={{
                      width: "auto",
                      marginTop: ".5rem",
                    }}
                    // disabled={loading}
                    color="success"
                  >
                    {/* {loading ? (
                      <div className="mr-3">
                        <Spinner size="sm" light={true} /> Loading...
                      </div>
                    ) : ( */}
                    Submit
                    {/* )} */}
                  </Button>
                </form>
              </div>
            </div>
          </section>
          {/* ====== Contact Section End */}
        </div>

        <div className="mt-8 md:mt-12 lg:mt-16 mb-8 md:mb-12 lg:mb-16">
          <div className="mb-4 md:mb-8">
            <h1 className="text-2xl md:text-3xl font-black font-sans text-center mb-2">
              Frequently asked questions
            </h1>
            <p className="text-center text-base md:text-lg font-light">
              lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>

          <Accordion alwaysOpen={true}>
            <Accordion.Panel>
              <Accordion.Title>What is Flowbite?</Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components
                  built on top of Tailwind CSS including buttons, dropdowns,
                  modals, navbars, and more.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to{" "}
                  <a
                    href="https://flowbite.com/docs/getting-started/introduction/"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    get started
                  </a>{" "}
                  and start developing websites even faster with components on
                  top of Tailwind CSS.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                Is there a Figma file available?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is first conceptualized and designed using the Figma
                  software so everything you see in the library has a design
                  equivalent in our Figma file.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Check out the{" "}
                  <a
                    href="https://flowbite.com/figma/"
                    className="text-blue-600 hover:underline dark:text-blue-500"
                  >
                    Figma design system
                  </a>{" "}
                  based on the utility classes from Tailwind CSS and components
                  from Flowbite.
                </p>
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title>
                What are the differences between Flowbite and Tailwind UI?
              </Accordion.Title>
              <Accordion.Content>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  The main difference is that the core components from Flowbite
                  are open source under the MIT license, whereas Tailwind UI is
                  a paid product. Another difference is that Flowbite relies on
                  smaller and standalone components, whereas Tailwind UI offers
                  sections of pages.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  However, we actually recommend using both Flowbite, Flowbite
                  Pro, and even Tailwind UI as there is no technical reason
                  stopping you from using the best of two worlds.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Learn more about these technologies:
                </p>
                <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                  <li>
                    <a
                      href="https://flowbite.com/pro/"
                      className="text-blue-600 hover:underline dark:text-blue-500"
                    >
                      Flowbite Pro
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindui.com/"
                      rel="nofollow"
                      className="text-blue-600 hover:underline dark:text-blue-500"
                    >
                      Tailwind UI
                    </a>
                  </li>
                </ul>
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </div>
      </article>

      <footer>
        <FooTer />
      </footer>
    </>
  );
};

export default About;
