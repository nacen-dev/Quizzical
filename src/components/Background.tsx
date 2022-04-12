import React from "react";
import Blob from "../assets/blob.svg";
import YellowBlob from "../assets/yellow-blob.svg";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Background = ({ children, className }: Props) => {
  return (
    <div className={`bg-grayBackground ${className ? className : ""}`}>
      {children}
    </div>
  );
};

export { Background };
