import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => (
  <div className="flex flex-col items-center justify-center min-h-[80vh] bgwhite/10 px-6 text-center">

    <div className='flex flex-col items-center justify-center rounded-3xl w-[70%] h-[60vh] bg-white font-dmsans'>

      <div className="text-[8rem] font-extrabold text-UXHQ-black tracking-widest mb-4">404</div>

      <h2 className="text-2xl md:text-3xl font-bold text-UXHQ-black/80 mb-3">
        Page Not Found
      </h2>

      <p className="text-gray-500 text-lg max-w-md mb-8">
        Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
      </p>

      <NavLink
        to="/"
        className="inline-block bg-UXHQ-black  text-white  font-semibold py-3 px-8 rounded-lg shadow-md  transition-all duration-300"
      >
        ← Go Back Home
      </NavLink>

      <div className="mt-12 opacity-10">
        <svg
          className="w-64 h-64"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18v-6h13V6H9v6H4v6h5z" />
        </svg>
      </div>
    </div>



  </div>
);

export default NotFound;
