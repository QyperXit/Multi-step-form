import React from "react";

const PersonalInfo = () => {
  return (
    <>
      <div className="flex flex-col p-7 sm:bg-white bg-alabaster mt-[-5.15em] rounded-lg sm:rounded-none  sm:mt-0 sm:p-0 shadow-lg sm:shadow-none">
        <h1 className="text-marine-blue  font-ubuntu font-bold text sm:text-4xl  text-2xl">
          Personal Info
        </h1>
        <p className=" mt-2 text-cool-gray">
          Please provide your name, email address, and phone number.
        </p>
        <label className=" text-marine-blue mt-4 sm:mt-8 text-xs">Name</label>
        <input
          type="text"
          required
          className="border  px-3 py-2 placeholder:text-xs placeholder:font-bold rounded-md mt-1"
          placeholder="e.g. Stephen King"
        />
        <label className=" text-marine-blue mt-4 text-xs">Email Address</label>
        <input
          type="email"
          required
          className="border  px-3 py-2 placeholder:text-xs placeholder:font-bold rounded-md mt-1 "
          placeholder="e.g. Stephenking@lorem.com"
        />
        <label className=" text-marine-blue mt-4 text-xs">Phone Number</label>
        <input
          type="tel"
          required
          className="border  px-3 py-2 placeholder:text-xs placeholder:font-bold rounded-md mt-1"
          placeholder="e.g. +1 234 567 890"
        />
      </div>
    </>
  );
};

export default PersonalInfo;
