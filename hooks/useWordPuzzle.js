// src/hooks/useWordPuzzle.js
import { useQuery } from '@tanstack/react-query';
import { getPuzzleWords } from '../services/testService';

export function useWordPuzzle() {
  return useQuery({
    queryKey: ['puzzle_words'],
    queryFn: getPuzzleWords,
  });
}