import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';

const ErrorPage = ({ error }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <div className="flex items-center justify-center text-red-500 mb-4">
          <FaExclamationTriangle size={48} />
        </div>
        <h1 className="text-2xl font-bold text-center mb-4">Oops! Something went wrong</h1>
        <p className="text-gray-600 text-center mb-6">
          We're sorry, but we encountered an error while loading the Help Center.
        </p>
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6">
          <p className="font-bold">Error details:</p>
          <p>{error}</p>
        </div>
        <div className="text-center">
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;