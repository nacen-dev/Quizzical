import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Button = ({ children, className }: Props) => {
  return (
    <button
      className={`px-4 py-3 text-xl text-white bg-buttonColor rounded-lg ${
        className ? className : ""
      }`}
    >
      {children}
    </button>
  );
};

export { Button };
