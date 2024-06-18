import images from "index.js";
import { sidebarDesktop } from "./index.js";

function App() {
  return (
    <section className=" bg-magnolia  sm:h-screen  grid sm:place-items-center">
      <div className="font-ubuntu sm:flex max-h-[568px] justify-center relative sm:p-4 bg-white rounded-xl">
        {/* <img
          src={images.sidebarDesktop}
          className="hidden sm:block"
          alt="sidemenu-bg"
        />
        <img
          src={images.sidebarMobile}
          className="block sm:hidden"
          alt="sidemenu-bg"
        /> */}
        <div className="sm:bg-[url('assets/images/bg-sidebar-desktop.svg')] bg-[url('assets/images/bg-sidebar-mobile.svg')]  sm:pt-8 px-5 pr-[min(6vw,10em)]  bg-no-repeat bg-cover bg-[position:50%_100%] sm:rounded-lg ">
          <div className=" flex sm:flex-col items-baseline pt-7 h-44 justify-center sm:gap-5">
            <div className="flex items-center gap-3">
              <h2 className=" w-5 h-5 inline-flex items-center justify-center p-4 rounded-full bg-pastel-blue  font-bold text-sm">
                1
              </h2>
              <div>
                <h2 className=" text-pastel-blue text-xs hidden sm:block">
                  STEP 1
                </h2>
                <h2 className="text-alabaster font-bold text-sm hidden sm:block">
                  YOUR INFO
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <h2 className=" w-5 h-5 inline-flex items-center justify-center p-4 rounded-full border text-alabaster font-bold text-sm">
                2
              </h2>
              <div>
                <h2 className=" text-pastel-blue text-xs hidden sm:block">
                  STEP 2
                </h2>
                <h2 className="text-alabaster font-bold text-sm hidden sm:block">
                  SELECT PLAN
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <h2 className=" w-5 h-5 inline-flex items-center justify-center p-4 rounded-full border text-alabaster font-bold text-sm">
                3
              </h2>
              <div>
                <h2 className=" text-pastel-blue text-xs hidden sm:block">
                  STEP 3
                </h2>
                <h2 className="text-alabaster font-bold text-sm hidden sm:block">
                  ADD-ONS
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <h2 className=" w-5 h-5 inline-flex items-center justify-center p-4 rounded-full border text-alabaster font-bold text-sm">
                4
              </h2>
              <div>
                <h2 className=" text-pastel-blue text-xs hidden sm:block">
                  STEP 4
                </h2>
                <h2 className="text-alabaster font-bold text-sm hidden sm:block">
                  SUMMARY
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
        <div className="px-[min(6vw,10em)] mt-[min(2vw,4em)]  h-full  max-w-max ">
          <form className=" flex flex-col gap-12  h-full sm:px-4">
            <div className="flex flex-col p-7 sm:bg-white bg-alabaster mt-[-5.15em] rounded-lg sm:rounded-none  sm:mt-0 sm:p-0 shadow-lg sm:shadow-none">
              <h1 className="text-marine-blue  font-ubuntu font-bold text sm:text-4xl  text-2xl">
                Personal Info
              </h1>
              <p className=" mt-2 text-cool-gray">
                Please provide your name, email address, and phone number.
              </p>
              <label className=" text-marine-blue mt-4 sm:mt-8 text-xs">
                Name
              </label>
              <input
                type="text"
                required
                className="border  px-3 py-2 placeholder:text-xs placeholder:font-bold rounded-md mt-1"
                placeholder="e.g. Stephen King"
              />
              <label className=" text-marine-blue mt-4 text-xs">
                Email Address
              </label>
              <input
                type="email"
                required
                className="border  px-3 py-2 placeholder:text-xs placeholder:font-bold rounded-md mt-1 "
                placeholder="e.g. Stephenking@lorem.com"
              />
              <label className=" text-marine-blue mt-4 text-xs">
                Phone Number
              </label>
              <input
                type="tel"
                required
                className="border  px-3 py-2 placeholder:text-xs placeholder:font-bold rounded-md mt-1"
                placeholder="e.g. +1 234 567 890"
              />
            </div>
            <button className=" mt-[min(5vw,4em)]  ml-auto bg-marine-blue hover:bg-blue-800 font-semibold text-white w-fit px-6 py-2 mb-2 rounded-md">
              Next Step
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default App;
