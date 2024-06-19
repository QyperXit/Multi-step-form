import React from "react";
import advanceIcon from "../assets/images/icon-advanced.svg";
import arcadeIcon from "../assets/images/icon-arcade.svg";
import proIcon from "../assets/images/icon-pro.svg";

const SelectPlan = () => {
  return (
    <>
      <div className="flex w-full flex-col p-7  sm:bg-white bg-alabaster mt-[-5.15em] rounded-lg sm:rounded-none  sm:mt-0 sm:p-0 shadow-lg sm:shadow-none ">
        <h1 className="text-marine-blue  font-ubuntu font-bold text sm:text-4xl  text-2xl">
          Select your plan
        </h1>
        <p className=" mt-2 text-cool-gray">
          You have the option of monthly or yearly billing.
        </p>
        <div className="mt-8 flex  flex-col sm:flex-row gap-4 ">
          <div className="border flex sm:flex-col gap-3 sm:gap-0 p-3  rounded-md flex-grow  basis-24 items-center sm:items-start">
            <img src={arcadeIcon} className=" w-fit" alt="" />

            <div className="">
              <h2 className=" sm:mt-9  text-marine-blue font-bold">Arcade</h2>
              <p className=" text-sm   font-semibold text-cool-gray">$9/mo</p>
            </div>
          </div>
          <div className="border flex sm:flex-col p-3 rounded-md flex-grow  gap-3 sm:gap-0  items-center sm:items-start basis-24">
            <img src={advanceIcon} className=" w-fit" alt="" />

            <div className="">
              <h2 className=" sm:mt-9  text-marine-blue font-bold">Advanced</h2>
              <p className=" text-sm  font-semibold  text-cool-gray">$12/mo</p>
            </div>
          </div>
          <div className="border flex sm:flex-col  p-3 rounded-md flex-grow gap-3 sm:gap-0 items-center sm:items-start sm:w-48  basis-24">
            <img src={proIcon} className="  w-fit" alt="" />
            <div className="">
              <h2 className=" sm:mt-9  text-marine-blue font-bold">Pro</h2>
              <p className=" text-sm  font-semibold  text-cool-gray">$15/mo</p>
            </div>
          </div>
        </div>
        <div className=" mt-6  flex  gap-3 justify-center  w-full  bg-slate-100 sm:bg-slate-50 rounded-lg py-2">
          <p className=" text-sm font-bold">Monthly</p>
          <input
            type="checkbox"
            className="toggle  [bg-marine-blue] scale-75  bg-white  border-marine-blue "
            checked
          />

          <p className=" text-sm font-bold">Yearly</p>
        </div>
      </div>
    </>
  );
};

export default SelectPlan;
