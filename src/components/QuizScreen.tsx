import React from "react";
import { Background } from "./Background";
import { Button } from "./Button";
import { IQuestion, IForm } from "./Quiz";
import { QuizForm } from "./QuizForm";

type Props = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  questions: IQuestion[];
  checkAnswers: () => void;
  quizChecked: boolean;
  score: number;
  formData: IForm;
  onPlayAgain: () => void;
};

const QuizScreen = ({
  handleChange,
  questions,
  checkAnswers,
  quizChecked,
  formData,
  score,
  onPlayAgain,
}: Props) => {
  const playAgain = (
    <div className="w-full flex justify-center items-center gap-3">
      <p className="text-textColor text-xl font-bold">
        You scored {score}/5 correct answers
      </p>
      <Button className="py-2" onClick={onPlayAgain}>
        Play again
      </Button>
    </div>
  );

  return (
    <Background className="p-8">
      <div className="mx-[10%]">
        <QuizForm
          quizChecked={quizChecked}
          formData={formData}
          handleChange={handleChange}
          questions={questions}
        />
        {!quizChecked ? (
          <Button onClick={checkAnswers} className="w-full">
            Check answers
          </Button>
        ) : (
          playAgain
        )}
      </div>
    </Background>
  );
};

export { QuizScreen };
