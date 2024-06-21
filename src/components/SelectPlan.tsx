import advanceIcon from "../assets/images/icon-advanced.svg";
import arcadeIcon from "../assets/images/icon-arcade.svg";
import proIcon from "../assets/images/icon-pro.svg";

const SelectPlan = () => {
  return (
    <>
      <div className="flex md:w-[436px] max-w-full flex-col p-7  sm:bg-white bg-alabaster mt-[-5.15em] rounded-lg sm:rounded-none  sm:mt-0 sm:p-0 shadow-lg sm:shadow-none ">
        <h1 className="text-2xl font-bold text-marine-blue font-ubuntu text sm:text-4xl">
          Select your plan
        </h1>
        <p className="mt-2 text-cool-gray">
          You have the option of monthly or yearly billing.
        </p>
        <div className="flex flex-col gap-4 mt-8 sm:flex-row ">
          <div className="flex items-center flex-grow gap-3 p-3 border rounded-md sm:flex-col sm:gap-0 basis-24 sm:items-start">
            <img src={arcadeIcon} className=" w-fit" alt="" />

            <div className="">
              <h2 className="font-bold sm:mt-9 text-marine-blue">Arcade</h2>
              <p className="text-sm font-semibold text-cool-gray">$9/mo</p>
            </div>
          </div>
          <div className="flex items-center flex-grow gap-3 p-3 border rounded-md sm:flex-col sm:gap-0 sm:items-start basis-24">
            <img src={advanceIcon} className=" w-fit" alt="" />

            <div className="">
              <h2 className="font-bold sm:mt-9 text-marine-blue">Advanced</h2>
              <p className="text-sm font-semibold text-cool-gray">$12/mo</p>
            </div>
          </div>
          <div className="flex items-center flex-grow gap-3 p-3 border rounded-md sm:flex-col sm:gap-0 sm:items-start sm:w-48 basis-24">
            <img src={proIcon} className=" w-fit" alt="" />
            <div className="">
              <h2 className="font-bold sm:mt-9 text-marine-blue">Pro</h2>
              <p className="text-sm font-semibold text-cool-gray">$15/mo</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center w-full gap-3 py-2 mt-6 rounded-lg bg-slate-100 sm:bg-slate-50">
          <p className="text-sm font-bold ">Monthly</p>
          <input
            type="checkbox"
            className="toggle  [bg-marine-blue] scale-75  bg-white  border-marine-blue "
            checked
          />

          <p className="text-sm font-bold ">Yearly</p>
        </div>
      </div>
    </>
  );
};

export default SelectPlan;
