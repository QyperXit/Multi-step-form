import React, { useState } from "react";
import advanceIcon from "../assets/images/icon-advanced.svg";
import arcadeIcon from "../assets/images/icon-arcade.svg";
import proIcon from "../assets/images/icon-pro.svg";

interface Plan {
  name: string;
  icon: string;
  monthlyPrice: number;
  yearlyPrice: number;
}

const SelectPlan: React.FC = () => {
  const [isYearly, setIsYearly] = useState<boolean>(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("Arcade");

  const plans: Plan[] = [
    { name: "Arcade", icon: arcadeIcon, monthlyPrice: 9, yearlyPrice: 90 },
    { name: "Advanced", icon: advanceIcon, monthlyPrice: 12, yearlyPrice: 120 },
    { name: "Pro", icon: proIcon, monthlyPrice: 15, yearlyPrice: 150 },
  ];

  const handleToggle = (): void => {
    setIsYearly(!isYearly);
  };

  const handleSelectPlan = (planName: string): void => {
    setSelectedPlan(planName);
  };

  return (
    <>
      <div className="flex md:w-[436px] max-w-full flex-col p-7 sm:bg-white bg-alabaster mt-[-5.15em] rounded-lg sm:rounded-none sm:mt-0 sm:p-0 shadow-lg sm:shadow-none">
        <h1 className="text-2xl font-bold text-marine-blue font-ubuntu text sm:text-4xl">
          Select your plan
        </h1>
        <p className="mt-2 text-cool-gray">
          You have the option of monthly or yearly billing.
        </p>
        <div className="flex flex-col gap-4 mt-8 sm:flex-row">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex items-center flex-grow gap-3 p-3 border rounded-md sm:flex-col sm:gap-0 sm:items-start basis-24 cursor-pointer transition-colors duration-200 ${
                selectedPlan === plan.name
                  ? "border-marine-blue bg-alabaster"
                  : "border-light-gray hover:border-marine-blue"
              }`}
              onClick={() => handleSelectPlan(plan.name)}
            >
              <img src={plan.icon} className="w-fit" alt="" />
              <div className="">
                <h2 className="font-bold sm:mt-9 text-marine-blue">
                  {plan.name}
                </h2>
                <p className="text-sm font-semibold text-cool-gray">
                  ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}/
                  {isYearly ? "yr" : "mo"}
                </p>
                {isYearly && (
                  <p className="text-xs text-marine-blue">2 months free</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center w-full gap-3 py-2 mt-6 rounded-lg bg-slate-100 sm:bg-slate-50">
          <p
            className={`text-sm font-bold ${
              !isYearly ? "text-marine-blue" : "text-cool-gray"
            }`}
          >
            Monthly
          </p>
          <input
            type="checkbox"
            className="toggle [bg-marine-blue] scale-75 bg-white border-marine-blue"
            checked={isYearly}
            onChange={handleToggle}
          />
          <p
            className={`text-sm font-bold ${
              isYearly ? "text-marine-blue" : "text-cool-gray"
            }`}
          >
            Yearly
          </p>
        </div>
      </div>
    </>
  );
};

export default SelectPlan;
