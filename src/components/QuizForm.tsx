import React from "react";
import { IForm, IQuestion } from "./Quiz";
import he from "he";

type Props = {
  questions: IQuestion[];
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  quizChecked: boolean;
  formData: IForm;
};

const QuizForm = ({
  questions,
  handleChange,
  quizChecked,
  formData,
}: Props) => {
  return (
    <form>
      {questions.map((question) => {
        return (
          <div key={question.id} className="border-b-2 border-b-gray-200 mb-3">
            <p className="text-textColor text-2xl font-bold mb-4">
              {he.decode(question.question)}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 mb-5 justify-between gap-3">
              {question.choices.map((choice, index) => (
                <li key={choice} className="">
                  <input
                    type="radio"
                    name={question.id}
                    onChange={handleChange}
                    value={choice}
                    id={`${choice}${index}`}
                    className="opacity-0 peer absolute"
                    checked={formData[question.id] === choice}
                  />
                  <label
                    htmlFor={`${choice}${index}`}
                    className={`cursor-pointer text-center hover:bg-customGray peer-checked:bg-customGray 
                    peer-checked:border-none w-full block border-2 py-2 px-4 border-customViolet 
                    rounded-lg text-textColor ${
                      !quizChecked
                        ? "peer-checked:bg-customGray"
                        : choice === question.correctAnswer &&
                          formData[question.id] === choice
                        ? "peer-checked:bg-customGreen"
                        : "peer-checked:bg-customPink"
                    }`}
                  >
                    {choice}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </form>
  );
};

export { QuizForm };
