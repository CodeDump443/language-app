// src/components/Modal.jsx
import { motion } from 'framer-motion';

function Modal({ isOpen, onClose, onConfirm, message }) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="modal"
    >
      <div className="modal-content">
        <p>{message}</p>
        <button onClick={onConfirm}>Да</button>
        <button onClick={onClose}>Нет</button>
      </div>
    </motion.div>
  );
}

export default Modal;