import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 не забудь импорт

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate(); // 👈 добавляем здесь

  const handleSubmit = (e) => {
    e.preventDefault();
    // Здесь можно будет добавить реальную авторизацию через Supabase
    navigate("/levels"); // 🔥 редирект после входа/регистрации
  };

  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h2 className="text-2xl font-semibold mb-4">
        {isLogin ? "Вход" : "Регистрация"}
      </h2>
      <form className="space-y-4 w-80" onSubmit={handleSubmit}>
        <input className="w-full p-2 border" type="email" placeholder="Email" />
        <input className="w-full p-2 border" type="password" placeholder="Пароль" />
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">
          {isLogin ? "Войти" : "Зарегистрироваться"}
        </button>
      </form>
      <button className="mt-4 text-blue-600" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Нет аккаунта? Зарегистрироваться" : "Уже есть аккаунт? Войти"}
      </button>
    </div>
  );
};

export default AuthPage;
