// src/components/Header.jsx
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Modal from './Modal';

function Header() {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleExit = () => {
    setIsModalOpen(true);
  };

  const confirmExit = () => {
    navigate('/');
  };

  return (
    <header>
      <button onClick={handleExit}>🏠</button>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={confirmExit}
        message="Вы точно хотите выйти из теста? Прогресс не будет сохранён."
      />
    </header>
  );
}

export default Header;