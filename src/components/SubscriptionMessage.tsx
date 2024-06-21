import thankYou from "../assets/images/icon-thank-you.svg";

const SubscriptionMessage = () => {
  return (
    <div className="flex w-full flex-col p-7  sm:bg-white bg-alabaster mt-[-5.15em] rounded-lg sm:rounded-none  sm:mt-0 sm:p-0 shadow-lg sm:shadow-none ">
      <div className="flex flex-col items-center justify-center my-12 sm:mt-20">
        <img src={thankYou} className="max-w-14" alt="tick logo" />
        <h1 className="mt-6 text-2xl font-extrabold text-marine-blue">
          Thank you!
        </h1>
        <p className="max-w-md mt-4 font-normal text-center text-cool-gray ">
          Thanks for confirming your subscription! We hope you have <wbr /> fun
          using our <wbr /> platform. If you ever need support, <wbr /> please
          feel free to email us at <wbr /> support@loremgaming.com.
        </p>
      </div>
    </div>
  );
};

export default SubscriptionMessage;
