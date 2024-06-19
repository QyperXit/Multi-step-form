import React from "react";

const Addons = () => {
  return (
    <>
      <div className="flex w-full flex-col p-7  sm:bg-white bg-alabaster mt-[-5.15em] rounded-lg sm:rounded-none  sm:mt-0 sm:p-0 shadow-lg sm:shadow-none ">
        <h1 className="text-marine-blue  font-ubuntu font-bold text sm:text-4xl  text-2xl">
          Pick add-ons
        </h1>
        <p className=" mt-2 text-cool-gray">
          Addon-ons help enhance your gaming experience.
        </p>
        <div className="mt-8 flex flex-col   gap-4 ">
          <div className="flex items-center border rounded-lg py-3 px-5 ">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox  checkbox-sm [--chkbg:theme(colors.indigo.600)]  [--chkfg:white]"
            />
            <div className=" ml-5 ">
              <h2 className=" text-marine-blue font-bold">Online service</h2>
              <p className=" text-cool-gray text-sm">
                Access to multiplayer games
              </p>
            </div>
            <p className=" ml-auto text-sm text-purplish-blue font-semibold">
              +$1/mo
            </p>
          </div>
          <div className="flex items-center border rounded-lg  py-3 px-5 ">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox  checkbox-sm [--chkbg:theme(colors.indigo.600)]  [--chkfg:white]"
            />
            <div className=" ml-5">
              <h2 className=" text-marine-blue font-bold">Larger storage</h2>
              <p className=" text-cool-gray text-sm">Extra 1TB of cloud save</p>
            </div>
            <p className=" ml-auto text-sm text-purplish-blue font-semibold">
              +$2/mo
            </p>
          </div>
          <div className="flex items-center border rounded-lg  py-3 px-5 ">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox  checkbox-sm [--chkbg:theme(colors.indigo.600)]  [--chkfg:white]"
            />
            <div className=" ml-5">
              <h2 className=" text-marine-blue font-bold">
                Customizable profile
              </h2>
              <p className=" text-cool-gray text-sm">
                Custom theme on your profile
              </p>
            </div>
            <p className=" ml-auto text-sm text-purplish-blue font-semibold">
              +$2/mo
            </p>
          </div>
          {/* <div className="border flex sm:flex-col gap-3 sm:gap-0 p-3  rounded-md flex-grow  basis-24 items-center sm:items-start">
            <div className="">
              <h2 className=" sm:mt-9  text-marine-blue font-bold">Arcade</h2>
              <p className=" text-sm   font-semibold text-cool-gray">$9/mo</p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Addons;
