// src/pages/GrammarTest.jsx
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useGrammarQuestions } from '../hooks/useGrammarQuestions';
import { saveTestResult } from '../services/testService';
import QuestionCard from '../components/QuestionCard';
import LoadingSpinner from '../components/LoadingSpinner';
import Header from '../components/Header';
import { useAuth } from '../hooks/useAuth';

function GrammarTest() {
  const { type } = useParams();
  const { user } = useAuth();
  const { data: questions, isLoading } = useGrammarQuestions(type);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = async (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    if (currentQuestion + 1 < questions?.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const finalScore = Math.round((score / questions.length) * 100);
      if (user) {
        await saveTestResult(user.id, type, finalScore);
      }
      navigate('/test-result', { state: { score: finalScore, testType: type } });
    }
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <Header />
      <QuestionCard
        question={questions[currentQuestion][type === 'en-ru' ? 'en_word' : 'ru_word']}
        options={questions[currentQuestion].options}
        correctAnswer={questions[currentQuestion][type === 'en-ru' ? 'ru_word' : 'en_word']}
        onAnswer={handleAnswer}
      />
    </div>
  );
}

export default GrammarTest;