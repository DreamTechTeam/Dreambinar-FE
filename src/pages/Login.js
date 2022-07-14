import React from "react";
import Head from "../components/Head";
import { Link } from "react-router-dom";
import { Avatar, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Head title="Login" />

      <div className="grid grid-cols-1 grid-rows-1 h-screen md:grid-cols-2">
        <div className="flex flex-col justify-center w-80 mx-auto p-6">
          <div className="mb-4 md:mb-6">
            <div className="mb-2 flex justify-center">
              <Avatar img="https://res.cloudinary.com/ikram20/image/upload/v1657812999/dreambinar_brbdnc.jpg" />
            </div>
            <h1 className="font-[Inter] text-2xl font-bold text-center mb-2">
              Sign in to your account
            </h1>
            <p className="text-center text-slate-400">
              Not Have an Account?{" "}
              <Link to="/register" className="text-blue-600">
                Sign Up
              </Link>
            </p>
          </div>

          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Email" />
              </div>
              <TextInput
                id="email"
                type="email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <p className="text-red-700 text-sm mt-2">
                  * This field is required
                </p>
              )}
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Password" />
              </div>
              <TextInput
                id="password"
                type="password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="text-red-700 text-sm mt-2">
                  * This field is required
                </p>
              )}
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 w-full dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Sign In
            </button>
          </form>

          <div className="flex justify-center items-center text-sm mt-5">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>{" "}
            <p className="ml-2">
              <Link to="/" className="font-bold">
                Back To Home
              </Link>
            </p>
          </div>
        </div>

        <div className="bg-slate-200 hidden md:block"></div>
      </div>
    </>
  );
};

export default Login;
