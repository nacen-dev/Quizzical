import React from "react";
import { Background } from "./Background";
import { Button } from "./Button";

type Props = {};

const StartScreen = (props: Props) => {
  return (
    <Background className="h-full w-full flex items-center justify-center">
      <div className="flex flex-col gap-5 items-center px-5">
        <h1 className="text-4xl font-bold font-Karla text-textColor">Quizzical</h1>
        <p className="text-lg text-textColor text-center">Test your knowledge with random trivia</p>
        <Button className="w-full">Start quiz</Button>
      </div>
    </Background>
  );
};

export { StartScreen };
