// src/components/WordPuzzle.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function WordPuzzle({ ruWord, enWord, availableLetters, onComplete }) {
  const [currentWord, setCurrentWord] = useState('');
  const [lives, setLives] = useState(5);
  const navigate = useNavigate();

  const handleLetterClick = (letter) => {
    const newWord = currentWord + letter;
    if (enWord.startsWith(newWord)) {
      setCurrentWord(newWord);
      if (newWord === enWord) {
        onComplete(true);
      }
    } else {
      setLives(lives - 1);
      if (lives - 1 === 0) {
        onComplete(false);
      }
    }
  };

  if (lives === 0) {
    return (
      <div>
        <h2>Неудача</h2>
        <button onClick={() => navigate('/word-puzzle')}>Попробовать снова</button>
        <button onClick={() => navigate('/')}>На главную</button>
      </div>
    );
  }

  return (
    <div>
      <h2>{ruWord}</h2>
      <p>Жизни: {'❤️'.repeat(lives)}</p>
      <p>Слово: {currentWord}</p>
      <div>
        {availableLetters.map((letter, index) => (
          <button key={index} onClick={() => handleLetterClick(letter)}>
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
}

export default WordPuzzle;