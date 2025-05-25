import Header from '../components/Header';

function PrivacyPolicy() {
  return (
    <div>
      <Header />
      <h1>Политика конфиденциальности</h1>
      <p>
        Приложение "Language App" собирает ваш email и данные профиля через Google OAuth для предоставления персонализированного доступа к тестам. Мы не передаём ваши данные третьим лицам. Данные хранятся в Supabase с соблюдением мер безопасности.
      </p>
      <p>Для вопросов пишите на: support@example.com</p>
    </div>
  );
}

export default PrivacyPolicy;