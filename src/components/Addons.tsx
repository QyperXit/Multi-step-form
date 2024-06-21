import React from "react";

const Addons = () => {
  return (
    <>
      <div className="flex md:w-[436px] max-w-full flex-col p-7  sm:bg-white bg-alabaster mt-[-5.15em] rounded-lg sm:rounded-none  sm:mt-0 sm:p-0 shadow-lg sm:shadow-none ">
        <h1 className="text-2xl font-bold text-marine-blue font-ubuntu text sm:text-4xl">
          Pick add-ons
        </h1>
        <p className="mt-2 text-cool-gray">
          Addon-ons help enhance your gaming experience.
        </p>
        <div className="flex flex-col gap-4 mt-8 text-sm">
          <div className="flex items-center px-5 py-3 border rounded-lg ">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox  checkbox-sm [--chkbg:theme(colors.indigo.600)]  [--chkfg:white]"
            />
            <div className="ml-5 ">
              <h2 className="font-bold text-marine-blue">Online service</h2>
              <p className="text-sm text-cool-gray">
                Access to multiplayer games
              </p>
            </div>
            <p className="ml-auto text-sm font-semibold text-purplish-blue">
              +$1/mo
            </p>
          </div>
          <div className="flex items-center px-5 py-3 border rounded-lg ">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox  checkbox-sm [--chkbg:theme(colors.indigo.600)]  [--chkfg:white]"
            />
            <div className="ml-5 ">
              <h2 className="font-bold text-marine-blue">Larger storage</h2>
              <p className="text-sm text-cool-gray">Extra 1TB of cloud save</p>
            </div>
            <p className="ml-auto text-sm font-semibold text-purplish-blue">
              +$2/mo
            </p>
          </div>
          <div className="flex items-center px-5 py-3 border rounded-lg ">
            <input
              type="checkbox"
              defaultChecked
              className="checkbox  checkbox-sm [--chkbg:theme(colors.indigo.600)]  [--chkfg:white]"
            />
            <div className="ml-5 ">
              <h2 className="font-bold text-marine-blue">
                Customizable profile
              </h2>
              <p className=" text-cool-gray">Custom theme on your profile</p>
            </div>
            <p className="ml-auto font-semibold text-purplish-blue">+$2/mo</p>
          </div>
          {/* <div className="flex items-center flex-grow gap-3 p-3 border rounded-md sm:flex-col sm:gap-0 basis-24 sm:items-start">
            <div className="">
              <h2 className="font-bold sm:mt-9 text-marine-blue">Arcade</h2>
              <p className="text-sm font-semibold text-cool-gray">$9/mo</p>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Addons;
