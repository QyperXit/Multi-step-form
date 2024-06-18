import images from "index.js";
import PersonalInfo from "./components/PersonalInfo.js";

function App() {
  return (
    <section className=" bg-magnolia  sm:h-screen  grid sm:place-items-center">
      <div className="font-ubuntu sm:flex max-h-[568px] justify-center relative sm:p-4 bg-white rounded-xl">
        {/* steps */}
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
        {/* form */}
        <PersonalInfo />
      </div>
    </section>
  );
}

export default App;
