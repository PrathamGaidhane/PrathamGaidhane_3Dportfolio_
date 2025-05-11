// components/Loader.jsx
import React from 'react';
import Loadermodule from './Model/z/Loadermodule';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 bg-black flex justify-center items-center">
      <Loadermodule/>
    </div>
  );
};

export default Loader;
