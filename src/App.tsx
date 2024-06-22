import { FormEvent, useState } from "react";
import Addons from "./components/Addons.js";
import PersonalInfo from "./components/PersonalInfo.js";
import SelectPlan from "./components/SelectPlan.js";
import SubscriptionMessage from "./components/SubscriptionMessage.js";
import Summary from "./components/Summary.js";
import { useMultiStepForm } from "./utils/useMultiStepForm.js";

type FormData = {
  firstName: string;
  email: string;
  number: string;
  plan: string;
  isYearly: boolean;
  addons: string[];
};

const INITIAL_DATA: FormData = {
  firstName: "",
  email: "",
  number: "",
  plan: "",
  isYearly: "",
  addons: [],
};

function App() {
  const [formData, setFormData] = useState(INITIAL_DATA);
  function updateFields(fields: Partial<FormData>) {
    setFormData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { steps, currentStepIndex, step, isFirstStep, next, back, isLastStep } =
    useMultiStepForm([
      <PersonalInfo {...formData} updateFields={updateFields} />,
      <SelectPlan {...formData} updateFields={updateFields} />,
      <Addons {...formData} updateFields={updateFields} />,
      <Summary {...formData} updateFields={updateFields} />,
      <SubscriptionMessage {...formData} />,
    ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    next();
  }
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
          <form
            onSubmit={onSubmit}
            className="flex flex-col w-full h-full gap-12 sm:px-4"
          >
            {step}

            <div className="mt-[min(5vw,4em)] mb-2  flex justify-between">
              {!isFirstStep && (
                <button
                  onClick={back}
                  type="button"
                  className={`px-6 py-2 ${
                    currentStepIndex + 1 === 5 ? "invisible" : "visible"
                  } font-semibold hover:text-marine-blue text-cool-gray`}
                >
                  Go Back
                </button>
              )}
              <button
                type="submit"
                className={`px-6 py-2 ml-auto ${
                  currentStepIndex + 1 === 5 ? "invisible" : "visible"
                } font-semibold text-white rounded-md bg-marine-blue hover:bg-blue-800 w-fit`}
              >
                {isLastStep ? "Continue" : "Next Step"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default App;
