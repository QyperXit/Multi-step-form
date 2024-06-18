import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

export function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      <h2 className=" font-bold text-center m-0 mb-8">{title}</h2>
      <div className=" grid grid-cols-[auto_minmax(auto,400px)] justify-start  gap-5">
        {children}
      </div>
    </>
  );
}
