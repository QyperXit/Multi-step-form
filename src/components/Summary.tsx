import React from "react";

type SummaryProps = {
  plan: string;
  isYearly: boolean;
  addons: string[];
  updateFields: (fields: Partial<{ plan: string; isYearly: boolean }>) => void;
};

const Summary: React.FC<SummaryProps> = ({
  plan,
  isYearly,
  addons,
  updateFields,
}) => {
  const plans = {
    Arcade: { monthly: 9, yearly: 90 },
    Advanced: { monthly: 12, yearly: 120 },
    Pro: { monthly: 15, yearly: 150 },
  };

  const addonsList = {
    online_service: { name: "Online service", monthly: 1, yearly: 10 },
    larger_storage: { name: "Larger storage", monthly: 2, yearly: 20 },
    customizable_profile: {
      name: "Customizable profile",
      monthly: 2,
      yearly: 20,
    },
  };

  const planPrice = isYearly ? plans[plan].yearly : plans[plan].monthly;
  const addonsPrices = addons.reduce(
    (total, addon) =>
      total + (isYearly ? addonsList[addon].yearly : addonsList[addon].monthly),
    0
  );
  const totalPrice = planPrice + addonsPrices;

  const handlePlanChange = () => {
    updateFields({ isYearly: !isYearly });
  };

  return (
    <div className="flex md:w-[436px] max-w-full flex-col p-7 sm:bg-white bg-alabaster mt-[-5.15em] rounded-lg sm:rounded-none sm:mt-0 sm:p-0 shadow-lg sm:shadow-none">
      <h1 className="text-2xl font-bold text-marine-blue font-ubuntu text sm:text-4xl">
        Finishing up
      </h1>
      <p className="mt-2 text-cool-gray">
        Double-check everything looks OK before confirming.
      </p>
      <div className="flex flex-col gap-4 mt-8">
        <div className="flex flex-col p-6 rounded-lg gap-y-4 bg-gray-50">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-bold text-marine-blue">
                {plan} ({isYearly ? "Yearly" : "Monthly"})
              </h2>
              <p
                className="text-sm cursor-pointer hover:underline text-purplish-blue"
                onClick={handlePlanChange}
              >
                Change
              </p>
            </div>
            <p className="font-bold text-marine-blue">
              ${planPrice}/{isYearly ? "yr" : "mo"}
            </p>
          </div>
          <hr />
          {addons.map((addon) => (
            <div key={addon} className="flex justify-between">
              <p className="text-sm">{addonsList[addon].name}</p>
              <p className="text-sm font-semibold text-marine-blue">
                +$
                {isYearly
                  ? addonsList[addon].yearly
                  : addonsList[addon].monthly}
                /{isYearly ? "yr" : "mo"}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-between px-6">
          <p className="text-sm">Total (per {isYearly ? "year" : "month"})</p>
          <p className="text-lg font-bold text-purplish-blue">
            +${totalPrice}/{isYearly ? "yr" : "mo"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
