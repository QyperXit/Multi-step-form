import React, { useState } from "react";

interface Addon {
  id: string;
  name: string;
  description: string;
  price: number;
}

const Addons: React.FC = () => {
  const [checkedAddons, setCheckedAddons] = useState<string[]>([
    "online_service",
    "larger_storage",
    "customizable_profile",
  ]);

  const addons: Addon[] = [
    {
      id: "online_service",
      name: "Online service",
      description: "Access to multiplayer games",
      price: 1,
    },
    {
      id: "larger_storage",
      name: "Larger storage",
      description: "Extra 1TB of cloud save",
      price: 2,
    },
    {
      id: "customizable_profile",
      name: "Customizable profile",
      description: "Custom theme on your profile",
      price: 2,
    },
  ];

  const handleCheckboxChange = (addonId: string) => {
    setCheckedAddons((prevCheckedAddons) => {
      if (prevCheckedAddons.includes(addonId)) {
        return prevCheckedAddons.filter((id) => id !== addonId);
      } else {
        return [...prevCheckedAddons, addonId];
      }
    });
  };

  return (
    <>
      <div className="flex md:w-[436px] max-w-full flex-col p-7 sm:bg-white bg-alabaster mt-[-5.15em] rounded-lg sm:rounded-none sm:mt-0 sm:p-0 shadow-lg sm:shadow-none">
        <h1 className="text-2xl font-bold text-marine-blue font-ubuntu text sm:text-4xl">
          Pick add-ons
        </h1>
        <p className="mt-2 text-cool-gray">
          Add-ons help enhance your gaming experience.
        </p>
        <div className="flex flex-col gap-4 mt-8 text-sm">
          {addons.map((addon) => (
            <div
              key={addon.id}
              className={`flex items-center px-5 py-3 border rounded-lg ${
                checkedAddons.includes(addon.id)
                  ? "border-purplish-blue bg-alabaster"
                  : ""
              }`}
            >
              <input
                type="checkbox"
                checked={checkedAddons.includes(addon.id)}
                onChange={() => handleCheckboxChange(addon.id)}
                className="checkbox checkbox-sm [--chkbg:theme(colors.indigo.600)] [--chkfg:white]"
              />
              <div className="ml-5">
                <h2 className="font-bold text-marine-blue">{addon.name}</h2>
                <p className="text-sm text-cool-gray">{addon.description}</p>
              </div>
              <p className="ml-auto text-sm font-semibold text-purplish-blue">
                +${addon.price}/mo
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Addons;
