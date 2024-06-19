import React from "react";
import advanceIcon from "../assets/images/icon-advanced.svg";
import arcadeIcon from "../assets/images/icon-arcade.svg";
import proIcon from "../assets/images/icon-pro.svg";

const SelectPlan = () => {
  return (
    <>
      <div className="flex flex-col p-7  sm:bg-white bg-alabaster mt-[-5.15em] rounded-lg sm:rounded-none  sm:mt-0 sm:p-0 shadow-lg sm:shadow-none ">
        <h1 className="text-marine-blue  font-ubuntu font-bold text sm:text-4xl  text-2xl">
          Select your plan
        </h1>
        <p className=" mt-2 text-cool-gray">
          You have the option of monthly or yearly billing.
        </p>
        <div className="mt-8 sm:flex gap-4 ">
          <div className="border  p-3  rounded-md flex-grow  basis-24">
            <img src={arcadeIcon} alt="" />
            <h2 className=" mt-10  text-marine-blue font-bold">Arcade</h2>
            <p className=" text-sm   font-semibold text-cool-gray">$9/mo</p>
          </div>
          <div className="border  p-3 rounded-md flex-grow  basis-24">
            <img src={advanceIcon} alt="" />
            <h2 className=" mt-10  text-marine-blue font-bold">Advanced</h2>
            <p className=" text-sm  font-semibold  text-cool-gray">$12/mo</p>
          </div>
          <div className="border  p-3 rounded-md flex-grow  basis-24">
            <img src={proIcon} alt="" />
            <h2 className=" mt-10  text-marine-blue font-bold">Pro</h2>
            <p className=" text-sm  font-semibold  text-cool-gray">$15/mo</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectPlan;
