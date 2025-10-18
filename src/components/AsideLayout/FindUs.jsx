import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold ">Find Us On</h2>
      <div className="mt-4">
        <div className="join join-vertical w-full ">
          <button className="btn join-item bg-base-100">
            <FaFacebook /> Facebook
          </button>
          <button className="btn join-item bg-base-100">
            <FaTwitter /> Twitter
          </button>
          <button className="btn join-item bg-base-100">
            <FaInstagram /> Instagram
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
