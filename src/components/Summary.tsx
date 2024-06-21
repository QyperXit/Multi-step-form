const Summary = () => {
  return (
    <>
      <div className="flex md:w-[436px] max-w-full flex-col p-7  sm:bg-white bg-alabaster mt-[-5.15em] rounded-lg sm:rounded-none  sm:mt-0 sm:p-0 shadow-lg sm:shadow-none ">
        <h1 className="text-2xl font-bold text-marine-blue font-ubuntu text sm:text-4xl">
          Finishing up
        </h1>
        <p className="mt-2 text-cool-gray">
          Double-check everything looks OK before confirming.
        </p>
        <div className="flex flex-col gap-4 mt-8 ">
          <div className="flex flex-col p-6 rounded-lg gap-y-4 bg-gray-50">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="font-bold text-marine-blue">Arcade (Monthly)</h2>
                <p className="text-sm hover:underline hover:cursor-pointer text-purplish-blue">
                  Change
                </p>
              </div>
              <p className="font-bold text-marine-blue ">$9/mo</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p className="text-sm">Online service</p>
              <p className="text-sm font-semibold text-marine-blue">+$1/mo</p>
            </div>
            <div className="flex justify-between">
              <p className="text-sm">Larger storage</p>
              <p className="text-sm font-semibold text-marine-blue">+$2/mo</p>
            </div>
          </div>
          <div className="flex justify-between px-6">
            <p className="text-sm ">Total (per month)</p>
            <p className="text-lg font-bold text-purplish-blue">+$12/mo</p>
          </div>
          {/*  */}
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

export default Summary;
