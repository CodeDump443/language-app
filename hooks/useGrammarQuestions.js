// src/hooks/useGrammarQuestions.js
import { useQuery } from '@tanstack/react-query';
import { getWords } from '../services/testService';

export function useGrammarQuestions(testType) {
  return useQuery({
    queryKey: ['words', testType],
    queryFn: () => getWords(testType),
  });
}