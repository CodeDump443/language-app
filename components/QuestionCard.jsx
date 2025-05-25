// src/components/QuestionCard.jsx
import { useState } from 'react';

function QuestionCard({ question, options, correctAnswer, onAnswer }) {
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
    onAnswer(option === correctAnswer);
  };

  return (
    <div>
      <h2>{question}</h2>
      {options.map((option, index) => (
        <button
          key={index}
          className={selected === option ? (option === correctAnswer ? 'correct' : 'incorrect') : ''}
          onClick={() => handleSelect(option)}
          disabled={selected}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default QuestionCard;