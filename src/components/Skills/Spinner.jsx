// src/components/Spinner.jsx
import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

const Spinner = ({ loading, message }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <ClipLoader size={150} color={"#fbbf24"} loading={loading} />
      <div className="text-center text-yellow-400 py-4 text-2xl">{message}</div>
    </div>
  );
};

export default Spinner;