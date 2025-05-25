// src/pages/TestResult.jsx
import { useLocation } from 'react-router-dom';
import ResultCard from '../components/ResultCard';
import Header from '../components/Header';

function TestResult() {
  const { state } = useLocation();

  return (
    <div>
      <Header />
      <ResultCard score={state?.score || 0} testType={state?.testType || ''} />
    </div>
  );
}

export default TestResult;