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
      <div className="absolute bottom-[-190px] left-[-177px]">
        <img src={Blob} alt="blob" />
      </div>
      <div className="absolute top-[-175px] right-[-175px] rotate-[-128.49deg]">
        <img src={YellowBlob} alt="blob" />
      </div>
      {children}
    </div>
  );
};

export { Background };
