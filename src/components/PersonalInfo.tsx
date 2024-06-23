type UserData = {
  firstName: string;
  email: string;
  number: string;
};

type PersonalInfoProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

const PersonalInfo = ({
  firstName,
  email,
  number,
  updateFields,
}: PersonalInfoProps) => {
  return (
    <>
      <div className="flex flex-col p-7 sm:bg-white bg-alabaster mt-[-5.15em] rounded-lg sm:rounded-none  sm:mt-0 sm:p-0 shadow-lg sm:shadow-none">
        <h1 className="text-2xl font-bold text-marine-blue font-ubuntu text sm:text-4xl">
          Personal Info
        </h1>
        <p className="mt-2 text-cool-gray">
          Please provide your name, email address, and phone number.
        </p>
        <label className="mt-4 text-xs text-marine-blue sm:mt-8">Name</label>
        <input
          type="text"
          required
          autoFocus
          value={firstName}
          onChange={(e) => updateFields({ firstName: e.target.value })}
          className="px-3 py-2 mt-1 bg-white border rounded-md placeholder:text-xs placeholder:font-bold text-marine-blue"
          placeholder="e.g. Stephen King"
        />
        <label className="mt-4 text-xs text-marine-blue">Email Address</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => updateFields({ email: e.target.value })}
          className="px-3 py-2 mt-1 bg-white border rounded-md placeholder:text-xs placeholder:font-bold text-marine-blue"
          placeholder="e.g. Stephenking@lorem.com"
        />
        <label className="mt-4 text-xs text-marine-blue">Phone Number</label>
        <input
          type="tel"
          required
          value={number}
          onChange={(e) => updateFields({ number: e.target.value })}
          className="px-3 py-2 mt-1 bg-white border rounded-md bg-ma placeholder:text-xs placeholder:font-bold text-marine-blue"
          placeholder="e.g. +1 234 567 890"
        />
      </div>
    </>
  );
};

export default PersonalInfo;
