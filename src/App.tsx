import images from "index.js";
import Addons from "./components/Addons.js";
import PersonalInfo from "./components/PersonalInfo.js";
import SelectPlan from "./components/SelectPlan.js";
import Summary from "./components/Summary.js";
import { useMultiStepForm } from "./utils/useMultiStepForm.js";

function App() {
  const { steps, currentStepIndex } = useMultiStepForm([
    <div>ONe</div>,
    <div>two</div>,
  ]);
  return (
    <section className="grid bg-magnolia sm:h-screen sm:place-items-center">
      <div className="font-ubuntu sm:flex max-h-[568px] justify-center relative sm:p-4 sm:bg-white rounded-xl">
        {/* steps */}
        <div className="sm:bg-[url('assets/images/bg-sidebar-desktop.svg')] bg-[url('assets/images/bg-sidebar-mobile.svg')]  sm:pt-8 px-5 pr-[min(6vw,10em)]  bg-no-repeat bg-cover bg-[position:50%_100%] sm:rounded-lg ">
          <div className="flex items-baseline justify-center sm:flex-col pt-7 h-44 sm:gap-5">
            <div className="flex items-center gap-3">
              <h2
                className={` w-5 h-5 inline-flex items-center justify-center p-4 rounded-full  ${
                  currentStepIndex + 1 === 1
                    ? "bg-pastel-blue text-marine-blue"
                    : "bg-none text-white border"
                }  font-bold text-sm `}
              >
                1
              </h2>
              <div>
                <h2 className="hidden text-xs text-pastel-blue sm:block">
                  STEP 1
                </h2>
                <h2 className="hidden text-sm font-bold text-alabaster w-max sm:block">
                  YOUR INFO
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <h2
                className={` w-5 h-5 inline-flex items-center justify-center p-4 rounded-full  ${
                  currentStepIndex + 1 === 2
                    ? "bg-pastel-blue text-marine-blue"
                    : "bg-none text-white border"
                }  font-bold text-sm `}
              >
                2
              </h2>
              <div>
                <h2 className="hidden text-xs text-pastel-blue sm:block">
                  STEP 2
                </h2>
                <h2 className="hidden text-sm font-bold text-alabaster w-max sm:block">
                  SELECT PLAN
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <h2
                className={` w-5 h-5 inline-flex items-center justify-center p-4 rounded-full  ${
                  currentStepIndex + 1 === 3
                    ? "bg-pastel-blue text-marine-blue"
                    : "bg-none text-white border"
                }  font-bold text-sm `}
              >
                3
              </h2>
              <div>
                <h2 className="hidden text-xs text-pastel-blue sm:block">
                  STEP 3
                </h2>
                <h2 className="hidden text-sm font-bold text-alabaster sm:block">
                  ADD-ONS
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <h2
                className={` w-5 h-5 inline-flex items-center justify-center p-4 rounded-full  ${
                  currentStepIndex + 1 === 4
                    ? "bg-pastel-blue text-marine-blue"
                    : "bg-none text-white border"
                }  font-bold text-sm `}
              >
                4
              </h2>
              <div>
                <h2 className="hidden text-xs text-pastel-blue sm:block">
                  STEP 4
                </h2>
                <h2 className="hidden text-sm font-bold text-alabaster sm:block">
                  SUMMARY
                </h2>
              </div>
            </div>
          </div>
        </div>
        {/* form */}
        <div className="px-[min(3vw,8em)] mt-[min(2vw,4em)]  h-full mx-auto w-full  max-w[560px] sm:bg-transparent  mb-8 sm:mb-0 bg-[#F0F8FF]">
          <form className="flex flex-col w-full h-full gap-12 sm:px-4">
            {/* <PersonalInfo /> */}
            {/* <SelectPlan /> */}
            {/* <Addons /> */}
            <Summary />
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
