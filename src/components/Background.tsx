import React from "react";
import Blob from "../assets/blob.svg";
import YellowBlob from "../assets/yellow-blob.svg";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Background = ({ children, className }: Props) => {
  return (
    <div className={`bg-grayBackground h-screen relative ${className ? className : ""}`}>
      <div className="absolute bottom-[-100px] left-[-177px] -z-10">
        <img src={Blob} alt="blob" />
      </div>
      <div className="absolute top-[-100px] right-[-100px] rotate-[-128.49deg] -z-10">
        <img src={YellowBlob} alt="blob" />
      </div>
      {children}
    </div>
  );
};

export { Background };
