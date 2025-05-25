// src/components/ProfileCard.jsx
import { useAuth } from '../hooks/useAuth';
import { useTestResults } from '../hooks/useTestResults';

function ProfileCard() {
  const { user } = useAuth();
  const { data: results } = useTestResults(user?.id);

  return (
    <div>
      <h2>Профиль</h2>
      {user && (
        <>
          <p>Email: {user.email}</p>
          <p>Никнейм: {user.user_metadata?.nickname}</p>
          <p>Дата регистрации: {new Date(user.created_at).toLocaleDateString()}</p>
          <h3>История тестов</h3>
          {results?.map((result, index) => (
            <div key={index}>
              <p>Тип: {result.test_type}</p>
              <p>Результат: {result.score}%</p>
              <p>Дата: {new Date(result.created_at).toLocaleDateString()}</p>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default ProfileCard;