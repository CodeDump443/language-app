// src/components/LoadingSpinner.jsx
import { motion } from 'framer-motion';

function LoadingSpinner() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1 }}
    >
      Загрузка...
    </motion.div>
  );
}

export default LoadingSpinner;