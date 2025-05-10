import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";
import useGrammarQuestions from "../hooks/useGrammarQuestions";

export default function GrammarTest() {
  const { level } = useParams();
  const { questions, isLoading } = useGrammarQuestions(level);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  function handleAnswer(answer) {
    if (answer === questions[current].correct) {
      setScore((s) => s + 1);
    }
    setCurrent((c) => c + 1);
  }

  if (isLoading) return <p>Загрузка...</p>;
  if (current >= questions.length) return <p>Ваш результат: {score}</p>;

  return (
    <QuestionCard
      question={questions[current].question}
      options={questions[current].options}
      onAnswer={handleAnswer}
    />
  );
}
