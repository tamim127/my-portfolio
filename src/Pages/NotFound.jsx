import React from "react";
import { Link } from "react-router"; 
import notFoundImg from "../assets/bg.gif";

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center font-serif overflow-hidden">
        <title>Error - 404</title>

        {/* 404 Background Image */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-center mt-5 text-black">
          404
        </h1>
        <div
          className="mx-auto bg-center bg-cover w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] flex items-center justify-center"
          style={{ backgroundImage: `url(${notFoundImg})` }}
        ></div>

        {/* Content Box */}
        <div className="-mt-8 md:-mt-10 text-center">
          <h3 className="text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-2 lg:mb-3">
            Look like you're lost
          </h3>
          <p className="text-gray-500 text-base md:text-lg mb-5">
            The page you are looking for is not available!
          </p>
          <Link
            to="/"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors duration-300"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
