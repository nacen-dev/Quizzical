import React, { useState, useEffect } from "react";
import { QuizScreen } from "./QuizScreen";
import { StartScreen } from "./StartScreen";
import { nanoid } from "nanoid";
import { shuffle } from "../utils";
import he from "he";

export interface IQuestion {
  question: string;
  correctAnswer: string;
  choices: string[];
  id: string;
}

export interface IForm {
  [name: string]: string;
}

const Quiz = () => {
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [formData, setFormData] = useState<IForm>({});
  const [score, setScore] = useState(0);
  const [quizChecked, setQuizChecked] = useState(false);

  const checkAnswers = () => {
    let index = 0;
    for (const choice in formData) {
      if (choice === questions[index].id) {
        if (formData[choice] === questions[index].correctAnswer) {
          setScore((prevScore) => prevScore + 1);
        }
      }
      index++;
    }
    setQuizChecked(true);
  };

  const mapQuestionsData = (questionsData: any) => {
    if (Array.isArray(questionsData)) {
      let data = questionsData.map((question) => ({
        id: nanoid(),
        correctAnswer: he.decode(question.correct_answer),
        choices: shuffle([
          question.correct_answer,
          ...question.incorrect_answers,
        ]).map((choice) => he.decode(choice)),
        question: question.question,
      }));
      setQuestions(data);
    }
  };

  const mapFormData = (questions: IQuestion[]) => {
    questions.map((question) => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [question.id]: "",
      }));
    });
  };

  const fetchQuestions = async () => {
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=5&type=multiple"
      );
      const body = await response.json();
      const data = await body.results;
      mapQuestionsData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const resetFormData = () => {
    setFormData({});
  }

  const onPlayAgain = () => {
    fetchQuestions();
    resetFormData();
    setQuizChecked(false);
    setScore(0);
  }

  useEffect(() => {
    fetchQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (questions) {
      mapFormData(questions);
    }
  }, [questions]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (quizChecked) return;
    const { name, value } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      };
    });
  };

  const startQuiz = () => {
    setStarted(true);
  };

  return (
    <>
      {started ? (
        <QuizScreen
          score={score}
          handleChange={handleChange}
          questions={questions}
          checkAnswers={checkAnswers}
          quizChecked={quizChecked}
          formData={formData}
          onPlayAgain={onPlayAgain}
        />
      ) : (
        <StartScreen start={startQuiz} />
      )}{" "}
    </>
  );
};

export { Quiz };
