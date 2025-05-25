// src/components/ResultCard.jsx
import { useNavigate } from 'react-router-dom';

function ResultCard({ score, testType }) {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Результат: {score}%</h2>
      <p>Тип теста: {testType === 'en-ru' ? 'Англо-русский' : 'Русско-английский'}</p>
      <button onClick={() => navigate(`/grammar-test/${testType}`)}>Пройти заново</button>
      <button onClick={() => navigate('/')}>На главную</button>
    </div>
  );
}

export default ResultCard;