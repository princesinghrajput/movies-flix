import React from "react";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600">
      <div className="rounded-lg bg-white p-8 text-center shadow-xl">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-16 h-16 mx-auto text-indigo-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        <h1 className="mb-4 text-6xl font-extrabold text-indigo-600">404</h1>
        <p className="text-gray-700 text-lg">
          Oops! The page you are looking for could not be found.
        </p>
        <a
          href="/"
          className="mt-6 inline-block rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3 font-semibold text-white hover:from-blue-600 hover:to-indigo-700"
        >
          {" "}
          Go back to Home{" "}
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
