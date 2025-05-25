// src/pages/WordPuzzleTest.jsx
import { useWordPuzzle } from '../hooks/useWordPuzzle';
import WordPuzzle from '../components/WordPuzzle';
import LoadingSpinner from '../components/LoadingSpinner';
import Header from '../components/Header';
import { useAuth } from '../hooks/useAuth';
import { saveTestResult } from '../services/testService';

function WordPuzzleTest() {
  const { user } = useAuth();
  const { data: words, isLoading } = useWordPuzzle();

  const handleComplete = async (success) => {
    if (success && user) {
      await saveTestResult(user.id, 'puzzle', 100);
    }
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <Header />
      <WordPuzzle
        ruWord={words[0].ru_word}
        enWord={words[0].en_word}
        availableLetters={words[0].available_letters}
        onComplete={handleComplete}
      />
    </div>
  );
}

export default WordPuzzleTest;